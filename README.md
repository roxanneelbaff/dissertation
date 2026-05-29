# Dissertation Companion Website

Static companion site for the PhD dissertation  
**"Audience-Aware Modeling in Computational Argumentation"**  
Roxanne El Baff · Bauhaus-Universität Weimar

## Running locally

The site is plain HTML/CSS/JS with no build step. Most pages open directly in the browser, but the **Glossary** page uses `fetch()` to load `glossary.json` and requires a local server.

```bash
# from the project root
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

> Any static file server works — `npx serve .`, `php -S localhost:8000`, VS Code Live Server, etc.
