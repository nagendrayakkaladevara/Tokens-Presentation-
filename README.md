# Tokens Presentation

A web-based presentation built with HTML, CSS, and JavaScript — slide-style screens you can open in any browser.

## Screens

| Screen | Title | Status |
|--------|-------|--------|
| 1 | What is a Token? (Before 5 Years) | Done |
| 2 | What is a Token? — LLM explanation & example | Done |

## Live site

**GitHub Pages:** https://nagendrayakkaladevara.github.io/Tokens-Presentation-/

### One-time setup (repo owner — ~30 seconds)

GitHub Pages is not enabled yet. Turn it on once:

1. Open **[Repository Settings → Pages](https://github.com/nagendrayakkaladevara/Tokens-Presentation-/settings/pages)**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**, then click **Save**

Your presentation will be live at the URL above within 1–2 minutes.

**Alternative (GitHub Actions):** set Source to **GitHub Actions**, then re-run the [Deploy to GitHub Pages](https://github.com/nagendrayakkaladevara/Tokens-Presentation-/actions/workflows/deploy-pages.yml) workflow.

## Run locally

Open `index.html` in your browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Navigation

- **→** or **Space** — next slide
- **←** — previous slide
