import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images";
const outputDir = "public/images/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageSettings = [
  {
    input: "hero-medical-wear.jpeg",
    output: "hero-medical-wear.webp",
    width: 1200,
    quality: 72,
  },
  {
    input: "male-scrubs.jpeg",
    output: "male-scrubs.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "female-scrubs.jpeg",
    output: "female-scrubs.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "scrub-caps.jpeg",
    output: "scrub-caps.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "nurse-watch-badges.jpeg",
    output: "nurse-watch-badges.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "lab-coats.jpeg",
    output: "lab-coats.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "custom-orders-1.jpeg",
    output: "custom-orders-1.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "custom-orders-2.jpeg",
    output: "custom-orders-2.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "about-txmeg.jpeg",
    output: "about-txmeg.webp",
    width: 900,
    quality: 72,
  },
  {
    input: "txmeg-logo.jpeg",
    output: "txmeg-logo.webp",
    width: 700,
    quality: 80,
  },
];

for (const image of imageSettings) {
  const inputPath = path.join(inputDir, image.input);
  const outputPath = path.join(outputDir, image.output);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipped: ${image.input} not found`);
    continue;
  }

  await sharp(inputPath)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
    })
    .toFile(outputPath);

  console.log(`Optimized: ${image.input} → optimized/${image.output}`);
}

console.log("Done optimizing images.");
