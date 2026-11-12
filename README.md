# little-endian.it

Marketing site for **Little Endian**, served by GitHub Pages at
<https://www.little-endian.it> (see `CNAME`).

## What this is

Plain static HTML, CSS and JavaScript. **No build step, no dependencies, no
npm.** What is in the repository is exactly what is served. Edit a file, commit,
push — GitHub Pages publishes it within a minute or two.

## Layout

```
index.html              English site (single page)
it/index.html           Italian site (single page)
404.html                Not-found page
assets/css/site.css     All styles (design tokens live in :root at the top)
assets/js/site.js       Sticky header, mobile nav, theme toggle, scroll reveal, year
assets/img/             Favicons, app icons, product and case-study screenshots
robots.txt, sitemap.xml SEO
CNAME                   Custom domain for GitHub Pages
.nojekyll               Serve files verbatim, no Jekyll processing
about/, projects/, …    Redirect stubs that forward the old Gatsby URLs
```

## Editing

* **Content** lives directly in the two `index.html` files. Any change to one
  should be mirrored in the other so EN and IT stay in sync.
* **Colours, spacing, radii and fonts** are CSS custom properties in the
  `:root` block of `assets/css/site.css`. Change them there, not inline.
  Every colour in the page resolves through a token, including the ones inside
  the inline agent diagram, so a palette change is a one-place edit.
* **Icons and illustrations** are inline SVG — no icon font, no sprite sheet.
* **Product screenshots** (`assets/img/shot-*.webp`) are raw app screens with no
  device frame baked in: the frame around them is CSS (`.device`), so one set of
  images stays consistent with the site. Replace a screenshot by dropping in a
  new portrait WebP about 560px wide. App icons are `assets/img/icon-*.webp`.
* Each product row carries its own accent via `--p` on `.prow--<name>`; the glow,
  the icon halo and the feature ticks all read from it.
* The **logo** is inline SVG traced from `avatar.png`, drawn as six rectangles on
  a `0 0 177 115` grid and filled with `currentColor` (`--brand`, `#e85100`), so
  it stays crisp at any size and in either theme. The favicons are generated from
  the same mark; `assets/img/favicon.svg` is the vector one.

## Theming

The site ships **dark and light**. Dark is the house style and the default.

* The system preference decides until the visitor presses the header toggle;
  that choice is then saved in `localStorage` under `le-theme` and wins from
  then on. A four-line inline script in each `<head>` applies the saved theme
  **before first paint**, so there is no flash of the wrong palette.
* Light values live in two mirrored blocks: a
  `@media (prefers-color-scheme: light)` one guarded by
  `:root:not([data-theme="dark"])`, and a `:root[data-theme="light"]` one for
  the explicit choice. **Edit both** — they must stay in sync.
* During a flip, `.theme-switch` on `<html>` kills every transition for one
  frame, otherwise each property eases at its own rate and the page smears.
* Both palettes are checked against WCAG AA (4.5:1 for body text, 3:1 for large
  text). If you change `--fg-dim`, `--fg-muted` or `--accent-2`, re-check: those
  are the three that sit closest to the line.
* The phone bezel in the product rows stays dark in both themes — a phone is a
  dark object — and only its glow (`--device-glow`) is dialled back in light.

## Previewing locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Use a server rather than opening the file directly: the pages reference assets
with absolute paths (`/assets/...`), which only resolve over HTTP.

## Deployment

The repository is a GitHub Pages **user/organisation site**, so the default
branch is published from its root. There is no workflow to run and nothing to
build.

## Sibling sites on this domain

`www.little-endian.it/workotto-site/` is **not** in this repository. It is a
separate GitHub Pages project site in another repo of the same organisation,
which GitHub serves under this repo's custom domain. The Workotto links on the
home page point at it, so they 404 when previewing locally and resolve in
production. Don't try to "fix" them by adding a `workotto-site/` folder here —
that would shadow the real one.

## Previous version

The site that lived here before was a Gatsby build whose sources were never
committed — only the compiled output. It was replaced wholesale. The three case
studies, the company description and the contact details were carried over from
it; the old `/about/`, `/projects/`, `/technologies/`, `/contact/` and
`/tags/` URLs now redirect into the new single-page layout.
