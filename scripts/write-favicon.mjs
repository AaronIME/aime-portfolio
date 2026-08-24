import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const NAVY = { r: 0x0c, g: 0x2d, b: 0x52, a: 255 };
const PAPER = { r: 0xf3, g: 0xf0, b: 0xea, a: 255 };

function pointInTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const v0x = cx - ax;
  const v0y = cy - ay;
  const v1x = bx - ax;
  const v1y = by - ay;
  const v2x = px - ax;
  const v2y = py - ay;
  const dot00 = v0x * v0x + v0y * v0y;
  const dot01 = v0x * v1x + v0y * v1y;
  const dot02 = v0x * v2x + v0y * v2y;
  const dot11 = v1x * v1x + v1y * v1y;
  const dot12 = v1x * v2x + v1y * v2y;
  const denom = dot00 * dot11 - dot01 * dot01;
  if (denom === 0) {
    return false;
  }
  const u = (dot11 * dot02 - dot01 * dot12) / denom;
  const v = (dot00 * dot12 - dot01 * dot02) / denom;
  return u >= 0 && v >= 0 && u + v < 1;
}

function inRoundedRect(x, y, size, radius) {
  if (x < 0 || y < 0 || x >= size || y >= size) {
    return false;
  }
  const cx = Math.min(Math.max(x + 0.5, radius), size - radius);
  const cy = Math.min(Math.max(y + 0.5, radius), size - radius);
  if (x + 0.5 >= radius && x + 0.5 < size - radius) {
    return true;
  }
  if (y + 0.5 >= radius && y + 0.5 < size - radius) {
    return true;
  }
  const dx = x + 0.5 - cx;
  const dy = y + 0.5 - cy;
  return dx * dx + dy * dy <= radius * radius;
}

function inLetterA(x, y, size) {
  const s = size / 32;
  const px = x + 0.5;
  const py = y + 0.5;
  const outer = pointInTriangle(
    px,
    py,
    16 * s,
    7.4 * s,
    24.2 * s,
    24.6 * s,
    7.8 * s,
    24.6 * s,
  );
  const hole = pointInTriangle(
    px,
    py,
    16 * s,
    12.95 * s,
    18.28 * s,
    18.03 * s,
    13.72 * s,
    18.03 * s,
  );
  return outer && !hole;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crcBuffer]);
}

function encodePng(pixels, size) {
  const rows = [];
  for (let y = 0; y < size; y += 1) {
    const row = Buffer.alloc(1 + size * 4);
    for (let x = 0; x < size; x += 1) {
      const pixel = pixels[y * size + x];
      const offset = 1 + x * 4;
      row[offset] = pixel.r;
      row[offset + 1] = pixel.g;
      row[offset + 2] = pixel.b;
      row[offset + 3] = pixel.a;
    }
    rows.push(row);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(Buffer.concat(rows))),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

function renderIcon(size) {
  const radius = size * 0.25;
  const pixels = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (!inRoundedRect(x, y, size, radius)) {
        pixels.push({ r: 0, g: 0, b: 0, a: 0 });
        continue;
      }
      pixels.push(inLetterA(x, y, size) ? PAPER : NAVY);
    }
  }
  return pixels;
}

function encodeIco(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header[6] = 32;
  header[7] = 32;
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

const png32 = encodePng(renderIcon(32), 32);
const png180 = encodePng(renderIcon(180), 180);

writeFileSync("c:/claude/aime-portfolio/public/favicon.ico", encodeIco(png32));
writeFileSync("c:/claude/aime-portfolio/public/apple-touch-icon.png", png180);

console.log("wrote favicon.ico and apple-touch-icon.png");
