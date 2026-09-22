# Emirates landing page — offline/self-hosted build

This turns `emirates-landing.html` (which pulls Tailwind, React, Babel, Lucide,
and fonts from CDNs) into a fully self-hosted bundle you can open with **no
internet connection**.

I couldn't run these steps myself — my sandbox has no internet access to
download npm packages — so this is set up for you to run on your own machine.

## What's here

```
build-kit/
├── package.json
├── tailwind.config.js
├── src/
│   ├── input.css     ← Tailwind entry point (imports custom.css)
│   ├── custom.css    ← your hand-written styles, extracted from the HTML
│   └── app.jsx       ← the React app, extracted from the HTML
└── dist/
    └── index.html    ← the offline-ready shell (references local files)
```

## Steps (requires Node.js + internet, one time only)

1. **Install dependencies**
   ```
   cd build-kit
   npm install
   ```

2. **Build the CSS and JS**
   ```
   npm run build
   ```
   This runs Tailwind's CLI (which scans `src/app.jsx` and generates only the
   utility classes actually used, minified — much smaller and faster than the
   CDN's in-browser JIT compiler) and Babel (which precompiles the JSX to
   plain JavaScript once, instead of every page load).

3. **Vendor React, ReactDOM, and Lucide locally**
   ```
   mkdir -p dist/vendor
   cp node_modules/react/umd/react.production.min.js dist/vendor/
   cp node_modules/react-dom/umd/react-dom.production.min.js dist/vendor/
   ```
   For Lucide, download `lucide.min.js` from https://unpkg.com/lucide@latest
   once and save it to `dist/vendor/lucide.min.js`.

4. **Self-host the fonts (optional but recommended for true offline use)**
   Download the Inter and Fraunces `.woff2` files (e.g. via
   [google-webfonts-helper](https://gwfh.mranftl.com/fonts)) into
   `dist/fonts/`, add an `@font-face` CSS file, and link it from
   `dist/index.html` in place of the Google Fonts `<link>`.

5. **Handle the hero video and photos**
   These are hosted on Cloudinary/Unsplash CDNs. Download them once and
   reference local paths (e.g. `./assets/hero.mp4`, `./assets/dubai.jpg`) if
   you want the page to work with zero network requests at all.

6. Open `dist/index.html` directly in a browser — no server or internet
   required once steps 3–5 are done.

## Why this matters

- The Tailwind CDN script (`cdn.tailwindcss.com`) recompiles all utility CSS
  in the browser on every load — Tailwind's own docs say it's not meant for
  production use.
- Babel Standalone re-parses and transpiles the entire ~700-line JSX file on
  every page load, which is slow and blocks rendering.
- Precompiling both ahead of time (steps 2–3) removes both of those runtime
  costs and lets the page work fully offline.
