import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const pages = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const info = statSync(fullPath);
    if (info.isDirectory()) {
      walk(fullPath);
    } else if (entry === "index.html") {
      pages.push(fullPath);
    }
  }
}

if (!existsSync(dist)) {
  throw new Error("dist does not exist. Run npm run build first.");
}

walk(dist);

const missing = [];

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/") || url.startsWith("//")) continue;

    if (url.startsWith("/assets")) {
      if (!existsSync(path.join(dist, url))) missing.push({ file, url });
      continue;
    }

    const routeFile = path.join(dist, url, "index.html");
    const directFile = path.join(dist, url);
    if (!existsSync(routeFile) && !existsSync(directFile)) {
      missing.push({ file, url });
    }
  }
}

if (missing.length) {
  console.error(JSON.stringify({ pages: pages.length, missing }, null, 2));
  process.exit(1);
}

console.log(`Checked ${pages.length} pages. No missing internal routes or local assets.`);
