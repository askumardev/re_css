# re_css — Learning React workspace

This repository is set up for learning React and building small practice apps (including the `foodora` sample).

Quick setup (Linux / WSL):

```bash
# install node (use nvm recommended)
nvm install 22 && nvm use 22
npm install
```

Useful scripts:

- `npm start` — Run the CRA development server (default PORT=4000 in this repo).
- `npm run foodora` — Serve the `foodora` sample with Parcel on port 5000.
- `npm run bistro` — Serve the new `bistro` sample with Parcel on port 5001.
- `npm run samples` — Serve the shared sample index page on port 5002. Note: start the individual sample servers first (see below) so links in the launcher open the correct ports.
- `npm run build` — Build the React app for production.
- `npm run build:foodora` — Build the `foodora` sample with Parcel.
- `npm run build:bistro` — Build the `bistro` sample with Parcel.
- `npm run build:samples` — Build the sample index HTML.
- `npm run clean` — Remove generated artifact directories (`coverage`, `dist`, `build`).

Development notes:

- Keep working code under `src/` and the `foodora` and `bistro` samples at top-level.
- The sample index page is at `samples/index.html` and links to the running sample dev servers on their ports (Foodora: `http://localhost:5000`, Bistro: `http://localhost:5001`).

Start samples in separate terminals before using the launcher:

```bash
# terminal 1
npm run foodora

# terminal 2
npm run bistro

# terminal 3 (optional launcher)
npm run samples
```
- Practice sample HTML/CSS/JS demos are under `practice/`.
- The dev server serves files from `public/`; avoid hard-coded absolute public URLs there during development.

Testing:

- `npm test` — Run tests (if present).
