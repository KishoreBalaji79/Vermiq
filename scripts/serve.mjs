import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"]
]);

function safeJoin(urlPath) {
  const cleaned = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const target = path.resolve(root, cleaned);
  return target.startsWith(root) ? target : root;
}

async function resolveFile(urlPath) {
  const target = safeJoin(urlPath);
  try {
    const info = await stat(target);
    if (info.isDirectory()) return path.join(target, "index.html");
    return target;
  } catch {
    return path.join(root, "404", "index.html");
  }
}

createServer(async (req, res) => {
  try {
    const file = await resolveFile(req.url || "/");
    const body = await readFile(file);
    res.writeHead(file.includes(`${path.sep}404${path.sep}`) ? 404 : 200, {
      "Content-Type": types.get(path.extname(file)) || "application/octet-stream"
    });
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(error instanceof Error ? error.message : "Server error");
  }
}).listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}`);
});
