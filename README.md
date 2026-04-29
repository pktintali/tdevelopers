# TDevelopers — Brand Landing Page

A bold, modern, mobile-first landing page for **TDevelopers** — the indie mobile app studio of Pradeep Kumar.

## Stack
- HTML + CSS + vanilla JS · zero build
- Tailwind via CDN
- Google Fonts (Inter + Bricolage Grotesque)

## Run
```bash
cd /Users/pradeepkumar8/development/web/personal/tdevelopers/tdevelopers
python3 -m http.server 5173
# open http://localhost:5173
```

## Files
- [index.html](index.html) — page structure
- [assets/styles.css](assets/styles.css) — custom polish
- [assets/apps.js](assets/apps.js) — apps catalog + rendering
- [assets/logo.jpg](assets/logo.jpg) — brand mark (512px)

## Edit apps
Open [assets/apps.js](assets/apps.js) and modify the `apps` array. Icons are sourced from Play Store CDN.

## Deploy
Static site — drop on Vercel, Netlify, Cloudflare Pages or GitHub Pages. No build step.
