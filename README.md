# CMU MRSD Team Website

A lightweight, accessible single-page website introducing a five-person Carnegie Mellon University Master of Science in Robotic Systems Development team. The site contains a compact team overview, a sponsor-facing Team at a Glance section, and detailed member profiles.

## Structure

- `index.html` — team overview, Team at a Glance, member profiles, and metadata
- `styles.css` — responsive visual system and component styles
- `script.js` — minimal mobile-navigation behavior
- `assets/team/` — add profile photos here when approved for public use
- `.nojekyll` — serves the static files directly on GitHub Pages

## Updating profiles

Member content is grouped in the `#members` section of `index.html`. Each profile is an `<article class="member-card">` containing the member's photo, background, strengths, experience, project interests, and available links. Omit missing fields rather than guessing.

To add a public profile photo, place an optimized JPG or WebP in `assets/team/` and replace the member's initials block with:

```html
<img class="member-photo" src="assets/team/member-name.jpg" alt="Member Name" loading="lazy">
```

Use a portrait image of at least 600 px on its shortest side and keep files below roughly 300 KB when practical.

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
