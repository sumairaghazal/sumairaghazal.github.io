# Sumaira Ghazal — Research Portfolio

A responsive editorial portfolio in ivory, forest green, and ink. Built with plain HTML, CSS, and JavaScript for GitHub Pages. No build step or package installation is required.

## Publish on GitHub Pages

1. Create a public repository named `sumairaghazal.github.io` under `sumairaghazal` (if that repository already exists, use `resume-website` instead).
2. Upload **the contents of this folder** to the repository's `main` branch, including `.github/workflows/pages.yml`, `.nojekyll`, and `assets/`.
3. In the repository, open **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
4. Open **Actions**, run **Deploy portfolio to GitHub Pages** if it has not started automatically, and wait for a successful deployment.
5. For `sumairaghazal.github.io`, the address is `https://sumairaghazal.github.io/`. For `resume-website`, it is `https://sumairaghazal.github.io/resume-website/`.

All asset links are relative, supporting both repository names without changing the source.

## Preview

Open `index.html` directly in a browser. For an HTTP preview, run `python -m http.server 8000` in this directory, then visit `http://localhost:8000`.

## Edit

- `index.html`: research, experience, publications, contact links, and biography.
- `styles.css`: typography, colors, responsive layout, and print styles.
- `script.js`: accessible project filtering and navigation highlighting.
- `assets/Sumaira_Resume.pdf`: downloadable source resume.

Google Fonts is optional: the design falls back to Georgia and Arial without internet access. All content remains readable without JavaScript. No analytics, tracking, or backend service is included.

## Content provenance

Biographical information, research metrics, and DOI/profile links come from the supplied `Sumaira_Resume.pdf`. Metrics are explicitly labeled as resume-reported and are not live citation counts. The field diagrams are original CSS illustrations rather than research results or actual sensing imagery. No portrait or project performance numbers have been invented.
