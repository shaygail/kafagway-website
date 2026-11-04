import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "public/images");

const images = [
  { file: "hero-dental.webp", width: 1400, height: 1800, from: "#8d7364", to: "#e4d9d0" },
  { file: "clinic-interior.webp", width: 1600, height: 1200, from: "#d5ccc3", to: "#8d7d72" },
  { file: "clinic-team.webp", width: 1400, height: 1600, from: "#241f1c", to: "#554039" },
  { file: "about-clinic.webp", width: 1600, height: 1200, from: "#ebe6e0", to: "#b7aa9e" },
  { file: "service-general.webp", width: 1600, height: 1200, from: "#1b1917", to: "#4a433c" },
  { file: "service-restorative.webp", width: 1600, height: 1200, from: "#f1ece7", to: "#c9bbb0" },
  { file: "service-implant.webp", width: 1600, height: 1200, from: "#1e1816", to: "#6d564b" },
  { file: "service-cosmetic.webp", width: 1600, height: 1200, from: "#f6f3ee", to: "#d7cec6" },
  { file: "patient-experience.webp", width: 1600, height: 1200, from: "#2b2624", to: "#7d6d63" },
];

function svg({ width, height, from, to }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${from}"/>
        <stop offset="100%" stop-color="${to}"/>
      </linearGradient>
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.22"/></feComponentTransfer>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" filter="url(#n)"/>
    <rect x="6%" y="6%" width="88%" height="88%" fill="none" stroke="rgba(250,250,248,0.28)" stroke-width="2"/>
  </svg>`;
}

await mkdir(outDir, { recursive: true });

for (const image of images) {
  const file = path.join(outDir, image.file);
  await sharp(Buffer.from(svg(image))).webp({ quality: 76 }).toFile(file);
  console.log(image.file);
}
