# vermiq 3D Motion Studio Website

A complete static multi-page website for vermiq, with animated 3D-style visual assets, service pages, portfolio pages, blog pages, forms, and interaction states.

## Run

```bash
npm run dev
```

This builds the site and starts a local server. Open the URL printed in the terminal.

## Project Structure

```text
.
├── public/              # Static assets copied as-is to production
│   └── assets/visuals/  # Replaceable 3D / SketchUp-style assets
├── scripts/             # Build, check, and local server scripts
├── src/
│   ├── data/            # Site map, services, blogs, page content
│   ├── lib/             # HTML rendering templates
│   ├── scripts/         # Browser-side interactions and animation
│   └── styles/          # Main visual system
└── dist/                # Generated production output, do not edit directly
```

`dist/` is normal for a production-level static project: it is the compiled output that gets deployed. Edit files in `src/` and `public/`, then run `npm run build`.

Useful scripts:

```bash
npm run build   # generate dist/
npm run check   # verify generated links/assets
npm run serve   # serve existing dist/
npm run dev     # build and serve locally
```

## GitHub Pages

Deployment is handled by `.github/workflows/deploy-pages.yml`. On every push to `main`, GitHub Actions builds `dist/`, checks generated routes/assets, uploads the Pages artifact, and deploys it.

Because this repository is published under `/Vermiq`, the workflow builds with:

```bash
BASE_PATH=/Vermiq npm run build
```

For local development, keep using `npm run dev`; it builds without a base path.

## Edit

- Main content, service pages, blog pages, navigation, and asset URLs live in `src/data/site-data.mjs`.
- Shared HTML templates live in `src/lib/render.mjs`.
- Styling lives in `src/styles/main.css`.
- Form handling, tabs, menus, modals, accordions, and carousel behavior live in `src/scripts/main.js`.
- Custom local SketchUp-style placeholder visuals live in `public/assets/visuals/`.

The current imagery mixes remote placeholders and local custom SVGs so you can swap in licensed production assets later.
