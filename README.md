# re_css — Learning React workspace

This repository is set up for learning React and building small practice apps (including the `foodora` sample).

Quick setup (Linux / WSL):

```bash
# install node (use nvm recommended)
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
- export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_Home}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

- nvm install --lts

- nvm install 24 && nvm use 24

- npm install
- node -v
- npm -v
- nvm -v
```

Useful scripts:

- `npm start` — Run the CRA development server (default PORT=4000 in this repo).
- `npm run foodex` — Serve the `foodex` sample with Parcel on port 5000.
- `npm run nflix`
- `npm run bistro` — Serve the new `bistro` sample with Parcel on port 5001.
- `npm run demo` — Serve the React concepts demo from `demo/` at `http://localhost:5003`.
- The React Fundamentals > Components dropdown opens the sample page at `http://localhost:5003/components.html`.
- The demo navbar groups React preparation topics; hover or keyboard-focus a category to open links to its topic sections.
- `npm run build` — Build the React app for production.
- `npm run build:foodex` — Build the `foodex` sample with Parcel.
- `npm run build:bistro` — Build the `bistro` sample with Parcel.
- `npm run clean` — Remove generated artifact directories (`coverage`, `dist`, `build`).

Development notes:

- Keep working code under `src/` and the `foodex` and `bistro` samples at top-level.
- The sample index page is at `samples/index.html` and links to the running sample dev servers on their ports (Foodora: `http://localhost:5000`, Bistro: `http://localhost:5001`).

Start samples in separate terminals before using the launcher:

```bash
# terminal 1
npm run foodora

# terminal 2
npm run bistro


```
- Practice sample HTML/CSS/JS demos are under `practice/`.
- To open the React concepts demo, run `npm run demo` and visit `http://localhost:5003`.
- The dev server serves files from `public/`; avoid hard-coded absolute public URLs there during development.

Testing:

- `npm test` — Run tests (if present).
