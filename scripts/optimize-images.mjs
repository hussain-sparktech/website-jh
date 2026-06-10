import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const WEBP_QUALITY = 90;

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function convertToWebP(fileName) {
  const inputPath = path.join(IMAGES_DIR, fileName);
  const outputName = fileName.replace(/\.png$/i, ".webp");
  const outputPath = path.join(IMAGES_DIR, outputName);

  const before = await stat(inputPath);

  await sharp(inputPath)
    .rotate()
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outputPath);

  const after = await stat(outputPath);
  await unlink(inputPath);

  const saved = ((1 - after.size / before.size) * 100).toFixed(1);
  console.log(`${fileName} → ${outputName}: ${formatBytes(before.size)} → ${formatBytes(after.size)} (-${saved}%)`);

  return { before: before.size, after: after.size };
}

async function main() {
  const files = await readdir(IMAGES_DIR);
  const pngFiles = files.filter((file) => file.toLowerCase().endsWith(".png"));

  if (pngFiles.length === 0) {
    console.log("No PNG files found in public/images.");
    return;
  }

  console.log(`Converting ${pngFiles.length} PNG images to WebP (quality ${WEBP_QUALITY})...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of pngFiles) {
    const result = await convertToWebP(file);
    totalBefore += result.before;
    totalAfter += result.after;
  }

  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(
    `\nTotal: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (-${totalSaved}%)`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
