# Anirudh Khade — Portfolio

Personal portfolio of **Anirudh Khade** (M.Tech Automation & Robotics, NIT Bhopal).
React + Vite + Tailwind + GSAP.

## Run locally

```bash
cd client
npm install
npm run dev
```

Build for production: `npm run build` (output in `client/dist`, ready for Vercel/Netlify — `client/vercel.json` already handles SPA rewrites).

## Where your content lives

| What | File |
|---|---|
| Name / site title | `client/index.html`, `client/src/components/NavBar/NavBar.jsx` |
| Hero headline & availability | `client/src/components/LandingPage/LandingPage.jsx` |
| About text & photo | `client/src/components/About/About.jsx` (photo: `client/src/assets/profile.svg`) |
| Projects (all 8) | `client/src/_mock/mockProjects.js` |
| Featured 4 on home page | `client/src/components/PageOne/Pagetext.jsx` |
| Roles ticker | `client/src/_mock/moackRoles.js` |
| Social links (GitHub/LinkedIn/Email) | `client/src/components/Footer/Footer.jsx` |
| Resume PDF | `client/src/assets/Anirudh_Khade_Resume.pdf` |

## Things to replace when you can

1. **Your photo** — swap `client/src/assets/profile.svg` (currently an "AK" placeholder) with a real photo; keep the same filename or update the import in `About.jsx`.
2. **Project artwork** — the SVGs in `client/src/assets/projects/` are generated placeholders. Replace with real screenshots/figures from your papers and update the imports in `mockProjects.js` and `Pagetext.jsx`.
3. **GitHub links per project** — add `githubLink: "https://github.com/aniblvck/..."` to any entry in `mockProjects.js` to show a "View Code" button.

## Backend (optional)

The original template used a Node backend (admin dashboard at `/admin`, contact API, project CRUD). It is **not required** now:

- Projects load from `mockProjects.js`.
- The contact form falls back to opening the visitor's email app addressed to `anirudhkhade434@gmail.com`.

If you later deploy your own backend, set its URL in `client/src/api/axios.js` and your Cloudinary account in `client/src/components/UploadWidget/UploadWidget.jsx` — the API code paths are still intact.
