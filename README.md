# Ratan Lal Bunkar — Portfolio

Personal portfolio site for **Ratan Lal Bunkar** — Hardware & Systems Engineer targeting Test, Validation, Characterization, Reliability, and Service Engineering roles in the semiconductor industry (ASML, KLA, AMAT, ASM, Micron).

Built with React + Vite + Tailwind CSS. Includes a presentation-mode walkthrough of projects and a journey-style skill matrix designed for live, in-person presenting — no slide deck required.

## Stack

- React 18 + Vite
- Tailwind CSS
- hls.js (HLS / MP4 background video)
- lucide-react (icons)
- Inter · Plus Jakarta Sans · Instrument Serif

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
npm run preview
```

## Layout

- **Hero** — full-bleed background video, large `System Engineer.` headline, framed portrait, contact modal (email · phone · LinkedIn with copy-to-clipboard).
- **Projects walkthrough** — keyboard-driven (← / → / Space) deck with one chapter per project (SmartHub, Molly cCap, Elexy). Includes a fullscreen Presentation Mode toggle.
- **About** — summary, facts panel (experience, education, location, languages).
- **Skill matrix walkthrough** — 12-chapter journey through engineering skill categories.

## Assets

The `assets/` folder is served at the site root via Vite's `publicDir`:

- `Wafer_inspection_probe_*.mp4` — hero background video
- `profile image.png` — portrait
- `ratan-lal-bunkar-cv.pdf` — resume (opens in new tab + downloads)
- Project images and animations
