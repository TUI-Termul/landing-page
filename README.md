# Termul Landing Page

Public landing page for the **TUI-Termul** design system — the face of Termul’s Flutter TUI component kit.

| Repo | Purpose |
|------|---------|
| [`TUI-Termul/termul`](https://github.com/TUI-Termul/termul) | Flutter source + live gallery |
| [`TUI-Termul/docs`](https://github.com/TUI-Termul/docs) | Design system & component docs |
| [`TUI-Termul/landing-page`](https://github.com/TUI-Termul/landing-page) | This landing page |

## Stack

- Vite + React + TypeScript

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

Preview template opens the **Flutter** gallery at http://localhost:5173/termul/ — build it first:

```bash
npm run build:gallery
```

```bash
npm run build
npm run preview
```

## What’s on the page

- **Home (`/`)** — hero, shell preview, theme switcher, component teaser. Preview links open the Flutter gallery at `/termul/` on the same host (local build or `https://tui-termul.github.io/termul/`).
- **Components (`/components`)** — full catalog with live previews + TOC
- Themes recolor the whole app (`paper` / `mocha` / `phosphor` / `tokyo-night`)

## License

MIT
