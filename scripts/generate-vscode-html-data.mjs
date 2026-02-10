import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

const componentsDtsPath = resolve(process.cwd(), 'dist/types/components.d.ts')
const outputPath = resolve(process.cwd(), 'types/vscode.html-data.json')
const svelteElementsPath = resolve(process.cwd(), 'types/svelte-elements.d.ts')
const loaderSveltePath = resolve(process.cwd(), 'types/loader-svelte.d.ts')
const distTypesDir = resolve(process.cwd(), 'dist/types')
const iconListPath = resolve(process.cwd(), 'node_modules/blip-tokens/build/icons.js')
const componentsSourceDir = resolve(process.cwd(), 'src/components')

const source = readFileSync(componentsDtsPath, 'utf8')
const typeAliasValuesByFile = loadTypeAliasValues(distTypesDir)
const typeAliasValuesByName = flattenTypeAliases(typeAliasValuesByFile)
const importedTypeMap = buildImportedTypeMap(source, dirname(componentsDtsPath))
const iconNames = loadIconNames(iconListPath)
const languageValues = typeAliasValuesByName.get('languages') ?? []
const componentDescriptions = loadComponentDescriptions(componentsSourceDir)

const localJsxStart = source.indexOf('declare namespace LocalJSX {')
if (localJsxStart === -1) {
    throw new Error('Could not find LocalJSX namespace in dist/types/components.d.ts')
}

const localJsxSource = source.slice(localJsxStart)

const intrinsicMatch = localJsxSource.match(/interface\s+IntrinsicElements\s*\{([\s\S]*?)\n\s*\}\n\s*\}/)
if (!intrinsicMatch) {
    throw new Error('Could not find LocalJSX.IntrinsicElements block')
}

const intrinsicBlock = intrinsicMatch[1]
const tagToInterface = new Map()
for (const match of intrinsicBlock.matchAll(/"([^"]+)"\s*:\s*([A-Za-z0-9_]+)\s*;/g)) {
    const [, tagName, interfaceName] = match
    tagToInterface.set(tagName, interfaceName)
}

const interfaceToAttributes = new Map()
for (const match of localJsxSource.matchAll(/interface\s+([A-Za-z0-9_]+)\s*\{([\s\S]*?)\n\s*\}/g)) {
    const [, interfaceName, body] = match
    if (interfaceName === 'IntrinsicElements') continue

    const attributes = new Map()
    for (const propMatch of body.matchAll(/(?:\/\*\*([\s\S]*?)\*\/\s*)?"([^"]+)"\s*\??\s*:\s*([^;]+);/g)) {
        const commentMeta = parseDocComment(propMatch[1] ?? '')
        const propName = propMatch[2]
        const typeExpression = propMatch[3].trim()

        if (/^on[A-Z]/.test(propName)) {
            const eventName = uncapitalize(propName.slice(2))
            const eventDescription = buildDescription(commentMeta, { includeAllowedValues: false }) || `Blip DS event \`${eventName}\`.`
            addAttribute(attributes, `on${eventName}`, [], eventDescription)
            addAttribute(attributes, `on:${eventName}`, [], eventDescription)
            continue
        }

        const attrName = toKebabCase(propName)
        const values = resolveAttributeValues(typeExpression, typeAliasValuesByFile, typeAliasValuesByName, importedTypeMap)
        const fallbackValues = resolveCommentValues(commentMeta, typeExpression, propName, languageValues)
        values.push(...fallbackValues)
        const description = buildDescription(commentMeta) || buildPropertyFallbackDescription(attrName, values)

        // Icon props are often typed as `string`; enrich with known icon token names.
        if (isIconLikeProp(propName) && iconNames.length > 0) {
            values.push(...iconNames)
        }

        addAttribute(attributes, attrName, values, description)
    }

    const sortedAttributes = [...attributes.values()].sort((a, b) => a.name.localeCompare(b.name))
    interfaceToAttributes.set(interfaceName, sortedAttributes)
}

const tags = [...tagToInterface.entries()]
    .map(([tagName, interfaceName]) => {
        const attributes = interfaceToAttributes.get(interfaceName) ?? []
        const description = buildComponentDescription(tagName, componentDescriptions.get(tagName))
        return {
            name: tagName,
            description,
            attributes,
        }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

const htmlData = {
    version: 1.1,
    tags,
}

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(htmlData, null, 2)}\n`, 'utf8')
writeSvelteTypeFiles()

console.log(`Generated ${outputPath} with ${tags.length} tags.`)

function toKebabCase(value) {
    return value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase()
}

function uncapitalize(value) {
    return value ? value[0].toLowerCase() + value.slice(1) : value
}

function walkFiles(dirPath, out = []) {
    for (const entry of readdirSync(dirPath)) {
        const fullPath = resolve(dirPath, entry)
        const stats = statSync(fullPath)
        if (stats.isDirectory()) {
            walkFiles(fullPath, out)
            continue
        }

        if (fullPath.endsWith('.d.ts')) {
            out.push(fullPath)
        }
    }

    return out
}

function walkAllFiles(dirPath, out = []) {
    for (const entry of readdirSync(dirPath)) {
        const fullPath = resolve(dirPath, entry)
        const stats = statSync(fullPath)
        if (stats.isDirectory()) {
            walkAllFiles(fullPath, out)
            continue
        }

        out.push(fullPath)
    }

    return out
}

function loadTypeAliasValues(dirPath) {
    const aliasesByFile = new Map()

    for (const filePath of walkFiles(dirPath)) {
        const text = readFileSync(filePath, 'utf8')
        const fileAliases = new Map()
        for (const match of text.matchAll(/export\s+type\s+([A-Za-z0-9_]+)\s*=\s*([^;]+);/g)) {
            const [, aliasName, expression] = match
            const values = extractStringLiterals(expression)
            if (values.length > 0) {
                fileAliases.set(aliasName, values)
            }
        }

        for (const match of text.matchAll(/export\s+declare\s+enum\s+([A-Za-z0-9_]+)\s*\{([\s\S]*?)\}/g)) {
            const [, enumName, body] = match
            const values = extractStringLiterals(body)
            if (values.length > 0) {
                fileAliases.set(enumName, values)
            }
        }

        if (fileAliases.size > 0) {
            aliasesByFile.set(filePath, fileAliases)
        }
    }

    return aliasesByFile
}

function flattenTypeAliases(aliasesByFile) {
    const byName = new Map()
    for (const fileAliases of aliasesByFile.values()) {
        for (const [name, values] of fileAliases.entries()) {
            const existing = byName.get(name)
            if (!existing || values.length < existing.length) {
                byName.set(name, values)
            }
        }
    }
    return byName
}

function buildImportedTypeMap(componentsSource, baseDir) {
    const imports = new Map()
    for (const match of componentsSource.matchAll(/import\s+\{([^}]+)\}\s+from\s+"([^"]+)";/g)) {
        const [, specifiersBlock, fromPath] = match
        const sourceFile = resolveImportPath(baseDir, fromPath)
        const specifiers = specifiersBlock.split(',').map((part) => part.trim()).filter(Boolean)
        for (const specifier of specifiers) {
            const [imported, alias] = specifier.split(/\s+as\s+/).map((part) => part.trim())
            imports.set(alias ?? imported, {
                sourceFile,
                typeName: imported,
            })
        }
    }
    return imports
}

function loadIconNames(filePath) {
    try {
        const text = readFileSync(filePath, 'utf8')
        const names = new Set()
        for (const arrayMatch of text.matchAll(/export\s+const\s+[A-Za-z0-9_]+Icons\s*=\s*\[([\s\S]*?)\];/g)) {
            const arrayBody = arrayMatch[1]
            for (const nameMatch of arrayBody.matchAll(/"([^"]+)"/g)) {
                names.add(nameMatch[1])
            }
        }
        return [...names].sort()
    } catch {
        return []
    }
}

function resolveAttributeValues(typeExpression, aliasesByFile, aliasesByName, importedTypeMap) {
    const values = new Set(extractStringLiterals(typeExpression))

    for (const identifier of extractTypeIdentifiers(typeExpression)) {
        let aliasValues
        const importedRef = importedTypeMap.get(identifier)
        if (importedRef) {
            aliasValues = aliasesByFile.get(importedRef.sourceFile)?.get(importedRef.typeName)
        }

        if (!aliasValues) {
            aliasValues = aliasesByName.get(identifier)
        }

        if (!aliasValues) continue
        for (const value of aliasValues) {
            values.add(value)
        }
    }

    return [...values].sort()
}

function resolveCommentValues(commentMeta, typeExpression, propName, languageValues) {
    const values = new Set()
    const commentEligibleType = isCommentValueEligibleType(typeExpression)

    // Some components are currently typed as plain `string` but use a shared language union at runtime.
    if (propName.toLowerCase() === 'language' && /\bstring\b/.test(typeExpression) && languageValues.length > 0) {
        for (const language of languageValues) {
            values.add(language)
        }
    }

    if (!commentEligibleType) {
        return [...values].sort()
    }

    for (const value of commentMeta.allowedValues) {
        values.add(value)
    }

    return [...values].sort()
}

function extractStringLiterals(expression) {
    const values = new Set()
    for (const match of expression.matchAll(/'([^']+)'/g)) {
        values.add(match[1])
    }
    return [...values]
}

function extractQuotedValues(text) {
    const values = new Set()

    for (const match of text.matchAll(/'([^']+)'|\"([^\"]+)\"/g)) {
        const rawValue = (match[1] ?? match[2] ?? '').trim()
        if (!rawValue) continue
        if (rawValue.length > 60) continue
        if (rawValue.includes('://')) continue
        if (rawValue.includes('{') || rawValue.includes('}') || rawValue.includes('[') || rawValue.includes(']')) continue
        values.add(rawValue)
    }

    return [...values]
}

function parseDocComment(rawComment) {
    const cleanedLines = rawComment
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter(Boolean)

    const summaryLines = []
    let defaultValue = ''

    for (const line of cleanedLines) {
        if (line.startsWith('@default')) {
            defaultValue = line.slice('@default'.length).trim()
            continue
        }

        if (line.startsWith('@')) {
            continue
        }

        summaryLines.push(line)
    }

    const summary = summaryLines.join(' ').replace(/\s+/g, ' ').trim()
    const allowedValues = extractAllowedValues(summary)

    return {
        summary,
        defaultValue,
        allowedValues,
    }
}

function extractAllowedValues(text) {
    const values = new Set()

    for (const match of text.matchAll(/can be one of:\s*([^\n]+)/gi)) {
        for (const value of extractQuotedValues(match[1])) {
            values.add(value)
        }
    }

    for (const match of text.matchAll(/\(([^)]*)\)/g)) {
        const quotedValues = extractQuotedValues(match[1])
        if (quotedValues.length < 2) continue
        for (const value of quotedValues) {
            values.add(value)
        }
    }

    return [...values].sort()
}

function buildDescription(commentMeta, options = {}) {
    const includeAllowedValues = options.includeAllowedValues ?? true
    const parts = []

    if (commentMeta.summary) {
        parts.push(commentMeta.summary)
    }

    const hints = []
    if (commentMeta.defaultValue) {
        hints.push(`Default: \`${commentMeta.defaultValue}\``)
    }

    if (includeAllowedValues && commentMeta.allowedValues.length > 0) {
        const maxAllowedValues = 12
        const shownValues = commentMeta.allowedValues.slice(0, maxAllowedValues).map((value) => `\`${value}\``)
        const suffix = commentMeta.allowedValues.length > maxAllowedValues ? ', ...' : ''
        hints.push(`Allowed: ${shownValues.join(', ')}${suffix}`)
    }

    if (hints.length > 0) {
        parts.push(`Hint: ${hints.join(' | ')}`)
    }

    return parts.join('\n\n')
}

function extractTypeIdentifiers(expression) {
    const ids = new Set()
    for (const match of expression.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)) {
        const name = match[0]
        if (name === 'string' || name === 'number' || name === 'boolean' || name === 'null' || name === 'undefined' || name === 'any') {
            continue
        }
        ids.add(name)
    }
    return [...ids]
}

function isCommentValueEligibleType(typeExpression) {
    const type = typeExpression.trim()

    if (/^(boolean|number)(\s*\|\s*undefined)?$/.test(type)) {
        return false
    }

    if (type.includes('=>') || type.includes('{') || type.includes('Date') || type.includes('RegExp')) {
        return false
    }

    return true
}

function addAttribute(map, name, values = [], description = '') {
    const existing = map.get(name)
    if (!existing) {
        const attribute = values.length > 0
            ? {
                  name,
                  values: values.map((value) => ({ name: value })),
              }
            : { name }

        if (description) {
            attribute.description = description
        }

        map.set(name, attribute)
        return
    }

    if (description && (!existing.description || description.length > existing.description.length)) {
        existing.description = description
    }

    if (values.length === 0) {
        return
    }

    const valueSet = new Set((existing.values ?? []).map((v) => v.name))
    for (const value of values) {
        valueSet.add(value)
    }
    existing.values = [...valueSet].sort().map((value) => ({ name: value }))
}

function isIconLikeProp(propName) {
    const normalized = propName.toLowerCase()
    return normalized === 'icon' || normalized === 'iconleft' || normalized === 'iconright' || normalized === 'badgeicon'
}

function normalizeDtsPath(filePath) {
    return filePath.endsWith('.d.ts') ? filePath : `${filePath}.d.ts`
}

function resolveImportPath(baseDir, fromPath) {
    const basePath = resolve(baseDir, fromPath)
    const candidates = [
        normalizeDtsPath(basePath),
        resolve(basePath, 'index.d.ts'),
    ]

    for (const candidate of candidates) {
        if (existsSync(candidate)) {
            return candidate
        }
    }

    return candidates[0]
}

function loadComponentDescriptions(componentsDir) {
    const descriptions = new Map()

    if (!existsSync(componentsDir)) {
        return descriptions
    }

    const readmeFiles = walkAllFiles(componentsDir).filter((filePath) => filePath.endsWith('/readme.md'))
    for (const filePath of readmeFiles) {
        const text = readFileSync(filePath, 'utf8')
        const tagMatch = text.match(/^#\s+(bds-[a-z0-9-]+)/im)
        if (!tagMatch) continue

        const summary = extractReadmeSummary(text)
        if (!summary) continue

        descriptions.set(tagMatch[1], summary)
    }

    return descriptions
}

function extractReadmeSummary(text) {
    const normalized = text.replace(/\r/g, '')
    const headingMatch = normalized.match(/^#\s+bds-[a-z0-9-]+\s*$/im)
    if (!headingMatch) {
        return ''
    }

    const startIndex = headingMatch.index + headingMatch[0].length
    let body = normalized.slice(startIndex)
    const autoIndex = body.indexOf('<!-- Auto Generated Below -->')
    if (autoIndex !== -1) {
        body = body.slice(0, autoIndex)
    }

    const lines = body
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .filter((line) => !line.startsWith('#') && !line.startsWith('<!--'))

    if (lines.length === 0) {
        return ''
    }

    return lines.join(' ').replace(/\s+/g, ' ').trim()
}

function buildComponentDescription(tagName, summary = '') {
    const base = summary || `Blip Design System component \`<${tagName}>\`.`
    const hint = 'Hint: Use kebab-case props. For events, use the original casing (for example: `on:bdsChange`).'
    return `${base}\n\n${hint}`
}

function buildPropertyFallbackDescription(attrName, values) {
    const base = `Blip DS property \`${attrName}\`.`
    if (!values || values.length === 0) {
        return base
    }

    const maxAllowedValues = 12
    const shownValues = values.slice(0, maxAllowedValues).map((value) => `\`${value}\``)
    const suffix = values.length > maxAllowedValues ? ', ...' : ''
    return `${base}\n\nHint: Allowed: ${shownValues.join(', ')}${suffix}`
}

function writeSvelteTypeFiles() {
    const svelteElementsSource = `type PrimitiveAttr = string | number | boolean | null | undefined;
type BlipDSIntrinsicElements = import('../loader/index').JSX.IntrinsicElements;
type GlobalElementAttributes = import('svelte/elements').SvelteHTMLElements['div'];

type KebabCase<S extends string, IsFirst extends boolean = true> = S extends \`\${infer C}\${infer R}\`
  ? C extends Lowercase<C>
    ? \`\${Lowercase<C>}\${KebabCase<R, false>}\`
    : \`\${IsFirst extends true ? '' : '-'}\${Lowercase<C>}\${KebabCase<R, false>}\`
  : S;

type KebabNonEventProps<T> = {
  [P in keyof T as P extends string
    ? P extends \`on\${string}\`
      ? never
      : KebabCase<P>
    : never]?: T[P] | PrimitiveAttr;
};

type EventProps<T> = {
  [P in keyof T as P extends \`on\${infer E}\` ? \`on\${Uncapitalize<E>}\` : never]?: T[P];
} & {
  [P in keyof T as P extends \`on\${infer E}\` ? \`on:\${Uncapitalize<E>}\` : never]?: T[P];
};

type BlipDSElements = {
  [K in keyof BlipDSIntrinsicElements]: GlobalElementAttributes &
    KebabNonEventProps<BlipDSIntrinsicElements[K]> &
    EventProps<BlipDSIntrinsicElements[K]>;
};

declare module 'svelte/elements' {
  interface SvelteHTMLElements extends BlipDSElements {}
}

declare global {
  // Compatibility for language servers that still read the svelteHTML namespace.
  // biome-ignore lint/style/noNamespace: required for svelte typing compatibility
  namespace svelteHTML {
    interface IntrinsicElements extends BlipDSElements {}
  }
}
`

    const loaderSvelteSource = "/// <reference path=\"./svelte-elements.d.ts\" />\n\nexport * from '../loader/index';\n"

    writeFileSync(svelteElementsPath, svelteElementsSource, 'utf8')
    writeFileSync(loaderSveltePath, loaderSvelteSource, 'utf8')
}
