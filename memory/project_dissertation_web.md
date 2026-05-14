---
name: Dissertation Website Project
description: Details about the dissertation companion website being built for Roxanne El Baff
type: project
---

A static dissertation guide website for Roxanne El Baff's PhD dissertation.

**Why:** Serve as a public guide for readers of the dissertation, with links to papers, corpora, code, and audio.

**How to apply:** When working on this project, follow the established design system and file structure.

## Dissertation
- Title: Audience-Aware Modeling in Computational Argumentation: Argument Quality, Style, and Generation
- Degree: Dr. rer. nat. (not yet awarded — "dissertation to obtain")
- Institution: Faculty of Media, Bauhaus-Universität Weimar, 2026
- Advisors: Prof. Dr. Benno Stein, Prof. Dr. Henning Wachsmuth
- Oral exam: April 15, 2026

## Site structure
- Plain HTML + custom CSS (css/styles.css) + JS (js/main.js, js/sidebar.js)
- Deployable to GitHub Pages (has .nojekyll)
- Pages: index.html, read.html, listen.html, materials/{index,chapter-2,chapter-3,chapter-4,chapter-5}.html

## Design system
- Color-coded by CA task: teal (#0d9488) = Assessment (Ch3), violet (#7c3aed) = Analysis (Ch4), amber (#d97706) = Generation (Ch5), slate (#475569) = Background (Ch2)
- Era badges: Pre-LLM (gray), LLM Era (gold)
- Fonts: Lora (serif, titles) + Inter (body)
- Left sidebar nav on materials pages (docs-style), injected via js/sidebar.js

## Content status (as of May 2026)
- All placeholder links marked "Coming soon" / .disabled class
- Webis-Editorial-Quality-18 corpus link is live: https://webis.de/data/webis-editorial-quality-18.html
- Sengupta NAACL 2024 paper link is live: https://aclanthology.org/2024.naacl-long.199/
- Wachsmuth COLING 2018 paper link is live: https://aclanthology.org/C18-1318.pdf
- Podcast (Google NotebookLM, 4 languages: EN/AR/FR/DE), audio versions, and all code links are placeholders
