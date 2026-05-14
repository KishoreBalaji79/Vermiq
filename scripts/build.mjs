import { cp, mkdir, rm, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, getAllPages } from "../src/data/site-data.mjs";
import { renderPage } from "../src/lib/render.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });

await copyFile(path.join(root, "src", "styles", "main.css"), path.join(dist, "assets", "styles.css"));
await copyFile(path.join(root, "src", "scripts", "main.js"), path.join(dist, "assets", "client.js"));
await cp(path.join(root, "public"), dist, { recursive: true });

for (const page of getAllPages()) {
  const outputPath = page.slug === ""
    ? path.join(dist, "index.html")
    : path.join(dist, page.slug, "index.html");
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderPage(site, page), "utf8");
}

await writeFile(
  path.join(dist, "sitemap.json"),
  JSON.stringify(getAllPages().map((page) => ({
    title: page.title,
    slug: page.slug || "/",
    type: page.type
  })), null, 2),
  "utf8"
);

console.log(`Built ${getAllPages().length} pages into ${path.relative(root, dist)}`);
