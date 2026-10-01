import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Connect, Plugin, ViteDevServer } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: https://tui-termul.github.io/landing-page/
const base = process.env.GITHUB_PAGES === "1" ? "/landing-page/" : "/";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.resolve(rootDir, "../termul/build/web");

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".wasm": "application/wasm",
  ".map": "application/json",
};

function missingGalleryHtml(): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Termul gallery — build needed</title>
  <style>
    body { font: 14px/1.5 ui-monospace, monospace; max-width: 36rem; margin: 3rem auto; padding: 0 1.25rem; color: #1a1a1a; }
    code { background: #f0eeea; padding: 0.1em 0.35em; }
    pre { background: #f0eeea; padding: 0.85rem 1rem; overflow: auto; }
    a { color: #1925aa; }
  </style>
</head>
<body>
  <h1>Termul gallery</h1>
  <p>Build the Flutter web gallery once, then reload this page:</p>
  <pre>cd ../termul
flutter build web --base-href /termul/</pre>
  <p>Or from <code>landing-page/</code>: <code>npm run build:gallery</code></p>
  <p><a href="/">← back to landing page</a></p>
</body>
</html>`;
}

function sendFile(
  res: Connect.ServerResponse,
  filePath: string,
): boolean {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return false;
  const ext = path.extname(filePath).toLowerCase();
  res.statusCode = 200;
  res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
  res.setHeader("Cache-Control", "no-cache");
  fs.createReadStream(filePath).pipe(res);
  return true;
}

/** Serve `termul/build/web` at `/termul/` (Flutter gallery with base-href /termul/). */
function termulGalleryPlugin(): Plugin {
  const mount = (middlewares: Connect.Server) => {
    middlewares.use((req, res, next) => {
      const raw = req.url ?? "";
      if (!raw.startsWith("/termul")) return next();

      if (!fs.existsSync(galleryDir)) {
        res.statusCode = 503;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(missingGalleryHtml());
        return;
      }

      const urlPath = decodeURIComponent(raw.split("?")[0] ?? "");
      let rel = urlPath.slice("/termul".length);
      if (rel === "" || rel === "/") rel = "/index.html";
      if (rel.endsWith("/")) rel += "index.html";

      const filePath = path.normalize(path.join(galleryDir, rel));
      if (!filePath.startsWith(galleryDir)) {
        res.statusCode = 403;
        res.end("Forbidden");
        return;
      }

      if (sendFile(res, filePath)) return;

      // Flutter client routes → index.html
      if (sendFile(res, path.join(galleryDir, "index.html"))) return;

      res.statusCode = 404;
      res.end("Not found");
    });
  };

  return {
    name: "termul-gallery",
    configureServer(server: ViteDevServer) {
      mount(server.middlewares);
    },
    configurePreviewServer(server) {
      mount(server.middlewares);
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), termulGalleryPlugin()],
  server: {
    fs: {
      allow: [rootDir, path.resolve(rootDir, "../termul/build/web")],
    },
  },
});
