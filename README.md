# Emirates — Fly Better (Frontend Concept)

A multi-page airline site built as a frontend practice/portfolio piece. No
frameworks, no build step — semantic HTML, hand-written CSS, and vanilla
JavaScript, with a shared stylesheet and script across pages.

> **Note:** This is an unofficial concept recreation for demonstration
> purposes. It is not affiliated with or endorsed by Emirates, and none of
> the fares, offers, flight times, or reviews shown are real.

## Live preview

Serve the folder with any static file server (relative links between pages
need `http://`, not `file://`):

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `index.html`.

## Pages

- **`index.html`** — the landing page: hero, interactive flight search
  widget, cabins, fleet, destinations (with working region filters), fares,
  Skywards tiers, testimonials, and an FAQ accordion.
- **`destinations/detail.html?city=<slug>`** — a single data-driven template
  that renders any of six cities (`london`, `sydney`, `new-york`, `paris`,
  `singapore`, `rome`) from `assets/destinations-data.js`: hero, route facts,
  overview, per-class fares, a sample flight schedule, and related
  destinations. Destination cards on the homepage link here.
- **`booking.html`** — a 3-step booking flow: choose an outbound/return
  flight, enter passenger details, then review and confirm. Reads
  `from`/`to`/`trip`/`depart`/`ret`/`adults`/`children`/`cabin` from the URL
  so it can be pre-filled from the homepage search or a destination page's
  fare cards. Confirming generates a mock PNR code — there's no backend and
  no payment step by design.

## Project structure

```
.
├── index.html
├── booking.html
├── destinations/
│   └── detail.html
├── assets/
│   ├── styles.css              # shared design system for every page
│   ├── main.js                 # shared, guarded behavior (nav, search, etc.)
│   ├── destinations-data.js    # city data used by detail.html + booking prefill
│   └── og-image.png            # 1200×630 social preview card
└── README.md
```

## Tech notes

- `assets/main.js` guards every block it runs (`if (el) {...}`), so the same
  file works safely across pages that don't have a given widget — e.g.
  booking.html has no destination filter chips, and that block just no-ops.
- No external JS libraries or icon fonts — icons are inline SVG.
- Fonts (Inter, Fraunces) load from Google Fonts; everything else is
  self-contained.
- Photography is hotlinked from Unsplash — swap for your own optimized,
  self-hosted assets before using this beyond a demo.
- SEO basics are wired up on the homepage: meta description, canonical tag,
  Open Graph / Twitter card tags pointing at `assets/og-image.png`, and a
  JSON-LD `WebSite` block. Update the placeholder `example.com` URLs once
  this has a real domain, and consider adding the same tags to the other
  pages if they'll be shared directly.

## Ideas for next steps

- Add a `sitemap.xml` and per-page canonical/OG tags now that there's more
  than one page.
- Replace hotlinked Unsplash images with optimized, self-hosted assets
  (responsive `srcset`, WebP/AVIF).
- Persist booking-flow state (e.g. `sessionStorage`) so a page refresh
  mid-flow doesn't lose progress.
- Wire the search and booking flow up to a real fares API if this becomes
  more than a demo.
