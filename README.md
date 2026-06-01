# Dissertation Companion Website

Static companion site for the PhD dissertation  
**"Audience-Aware Modeling in Computational Argumentation"**  
Roxanne El Baff · Bauhaus-Universität Weimar

## Running locally

The site is plain HTML/CSS/JS with no build step. Most pages open directly in the browser, but the **Glossary** page uses `fetch()` to load `glossary.json` and requires a local server.

```bash
# from the project root
python server.py
```

Then open **http://localhost:8000** in your browser.

Use `server.py` instead of `python -m http.server` — it registers the correct MIME type for `.m4a` audio files, which the default server omits (causing audio players to show 0:00 and refuse to play).

> Alternatives: `npx serve .`, VS Code Live Server, `php -S localhost:8000`.
