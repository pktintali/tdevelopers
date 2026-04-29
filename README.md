# TDevelopers — tdevelopers.in

The official site of **TDevelopers**, an indie mobile app studio.
Static, zero-JS-framework, deployed on Cloudflare Pages.

## Stack
- Plain HTML + CSS + a tiny vanilla JS file (`assets/apps.js`)
- Tailwind CSS v3 (compiled to `assets/tailwind.css`)
- Google Fonts: Inter + Bricolage Grotesque

## Develop

```bash
npm install        # one-time
npm run dev        # tailwind watcher → assets/tailwind.css
npm run serve      # python http server on :5173
```

Open http://localhost:5173 — Tailwind classes recompile on save.

## Build

```bash
npm run build      # minified production tailwind.css
```

## Deploy (Cloudflare Pages)

Connect this GitHub repo to Cloudflare Pages with:

- **Framework preset:** None
- **Build command:** `npm run build`
- **Output directory:** `/` (project root)
- **Node version:** `20` or higher

Then add the custom domain `tdevelopers.in` from the Pages → *Custom domains* tab.
SSL is automatic.

## Project layout

```
.
├── index.html              # landing page
├── 404.html                # custom not-found
├── robots.txt
├── sitemap.xml
├── _headers                # Cloudflare Pages cache + security headers
├── package.json
├── tailwind.config.js
├── src/input.css           # tailwind entrypoint
└── assets/
    ├── tailwind.css        # generated, committed
    ├── styles.css          # hand-written component styles
    ├── apps.js             # apps catalog + render
    ├── pradeep.jpg
    ├── logo.jpg
    └── icons/              # local app icons (Play Store CDN was blocked)
```
