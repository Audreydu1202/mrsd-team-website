# CMU MRSD Team Website

A lightweight, accessible single-page website introducing a five-person Carnegie Mellon University Master of Science in Robotic Systems Development team.

## Structure

- `index.html` — page content, member profiles, projects, and metadata
- `styles.css` — responsive visual system and component styles
- `script.js` — mobile navigation, active-section highlighting, reveal effects, and back-to-top behavior
- `assets/icons/favicon.svg` — custom team monogram
- `assets/team/` — add profile photos here when approved for public use
- `.nojekyll` — serves the static files directly on GitHub Pages

## Updating profiles

Member content is grouped in the `#team` section of `index.html`. Each profile is an `<article class="member-card">`; edit its summary and the native `<details>` element together so the concise and expanded information stay consistent. Omit missing fields rather than guessing.

To add a public profile photo, place an optimized JPG or WebP in `assets/team/` (for example, `anderlin-huang.webp`) and replace the member's initials block with:

```html
<img class="member-photo" src="assets/team/anderlin-huang.webp" alt="Portrait of Cheng-Ning (Anderlin) Huang">
```

Use a square image of at least 600 × 600 pixels and keep files below roughly 300 KB when practical.

## Adding projects

Selected work is grouped in the `#work` section. Copy one `.project-card`, update its title, description, tags, member attribution, and include a link only when a verified public URL is available.

## Local testing

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Test at narrow and wide viewport sizes, navigate by keyboard, and verify every external link before publishing.

## GitHub Pages

Pages deploys directly from the `main` branch and repository root. The production URL is:

https://audreydu1202.github.io/mrsd-team-website/

All local references are relative (`styles.css`, `script.js`, `assets/...`) so the site works beneath the `/mrsd-team-website/` project path. Avoid root-relative paths beginning with `/`, which point at the account-level domain root and commonly break project Pages sites.
