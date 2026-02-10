import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, 'node_modules', 'blip-tokens', 'build', 'json');
const outputDir = path.join(rootDir, 'src', 'assets', 'blip-tokens');

const assets = [
  'assets_icons.json',
  'assets_emojis.json',
  'assets_logos.json',
];

const minifySvg = (svg) =>
  svg
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();

const decodeBase64 = (value) => Buffer.from(value, 'base64').toString('utf8');

const optimizeSvg = (svg, key) => {
  try {
    const result = optimize(svg, {
      multipass: true,
      plugins: [
        'preset-default',
        'removeDimensions',
      ],
    });

    if (typeof result.data === 'string' && result.data.length > 0) {
      return result.data;
    }
  } catch (error) {
    console.warn(`[icons] SVGO failed for "${key}", using fallback minifier`);
  }

  return svg;
};

const writeAssetFile = async (fileName, payload) => {
  const outputPath = path.join(outputDir, fileName);
  await writeFile(outputPath, JSON.stringify(payload), 'utf8');
};

const splitIconBuckets = async (icons) => {
  const nonFlagOutline = {};
  const nonFlagSolid = {};
  const flagOutline = {};
  const flagSolid = {};

  for (const [key, value] of Object.entries(icons)) {
    const isFlag = key.includes('-flag-');
    const isOutline = key.endsWith('-outline');
    const isSolid = key.endsWith('-solid');

    if (isFlag && isOutline) {
      flagOutline[key] = value;
      continue;
    }

    if (isFlag && isSolid) {
      flagSolid[key] = value;
      continue;
    }

    if (!isFlag && isOutline) {
      nonFlagOutline[key] = value;
      continue;
    }

    if (!isFlag && isSolid) {
      nonFlagSolid[key] = value;
    }
  }

  await Promise.all([
    writeAssetFile('assets_icons_non_flag_outline.json', nonFlagOutline),
    writeAssetFile('assets_icons_non_flag_solid.json', nonFlagSolid),
    writeAssetFile('assets_icons_flag_outline.json', flagOutline),
    writeAssetFile('assets_icons_flag_solid.json', flagSolid),
  ]);
};

const buildAssets = async () => {
  await mkdir(outputDir, { recursive: true });

  for (const fileName of assets) {
    const sourcePath = path.join(sourceDir, fileName);
    let payload;

    try {
      payload = await readFile(sourcePath, 'utf8');
    } catch (error) {
      console.error(`[icons] Missing source asset: ${sourcePath}`);
      throw error;
    }

    const parsed = JSON.parse(payload);
    const output = {};

    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value !== 'string' || value.length === 0) {
        continue;
      }
      const svg = decodeBase64(value);
      const minified = minifySvg(svg);
      output[key] = optimizeSvg(minified, key);
    }

    await writeAssetFile(fileName, output);

    if (fileName === 'assets_icons.json') {
      await splitIconBuckets(output);
    }
  }
};

buildAssets().catch((error) => {
  console.error('[icons] Failed to build icon assets');
  console.error(error);
  process.exitCode = 1;
});
