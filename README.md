# fishares.github.io

Personal website, built with React, TypeScript and Vite. Live at https://fishares.github.io.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:5173
npm run lint      # oxlint
npm run build     # type-check (tsc) and build into dist/
npm run preview   # serve the built dist/ locally
npm run deploy    # build and publish dist/ to the gh-pages branch
```

## Where things are

- `src/cv.md`: the CV page. Entry headings take dates after a final ` | `, e.g.
  `### **Numenta** — Visiting Scientist | Feb 2020 – Jul 2020`.
- `src/components/`: one file per page (`Research.tsx`, `MindTheChl.tsx`, ...) plus the navbar.
- `src/App.tsx`: routes. Add a page here and to the `items` list in `Navbar.tsx`.
- `public/assets/`: images and files.
