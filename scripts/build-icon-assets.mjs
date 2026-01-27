import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

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
      output[key] = minifySvg(svg);
    }

    const outputPath = path.join(outputDir, fileName);
    await writeFile(outputPath, JSON.stringify(output), 'utf8');
  }
};

buildAssets().catch((error) => {
  console.error('[icons] Failed to build icon assets');
  console.error(error);
  process.exitCode = 1;
});
