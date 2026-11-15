# Alwayzz — React reference

A snapshot of the **Alwayzz** creative agency site: React 18 + Vite 6 + Tailwind 3, with all
styling in custom CSS (`src/index.css`). It is the reference for the multi section, React flavour
of our work. The live project lives at `../alwayzz/`.

## What to read first

| File | Why |
|---|---|
| `src/index.css` | The whole visual system: tokens, shared components, every section, both breakpoints, reduced motion. The most useful file here. |
| `src/App.jsx` | Section order for a full landing page. |
| `src/components/Navbar.jsx` | Fixed nav, full screen drawer, focus trap, scroll lock with scrollbar compensation, scroll spy. |
| `src/components/Tagline.jsx` | Word by word tagline reveal on a rAF throttled scroll reader. |
| `src/components/Reveal.jsx` | Scroll reveal wrapper. Content is visible by default so the page still reads without JavaScript. |
| `src/components/Faq.jsx` | Accessible accordion with `aria-expanded` and a grid row height animation. |
| `src/components/work/BrandSystemDemo.jsx` | Faux product UI built with the `stageshow` kit. |
| `src/components/work/brand-system.css` | Restyling a stageshow stage into a brand's palette. |

## Patterns worth copying

- Tokens first, then components. No one off scale font size anywhere.
- One curve: `cubic-bezier(0.22, 1, 0.36, 1)`. Never `ease` or `linear` for layout.
- Only `transform` and `opacity` animate.
- Everything has a hover, active, focus and reduced motion state.
- Copy is written, not lorem. No invented prices or statistics.

## Not included

`node_modules`, `dist`, and the vendored `stageshow` kit. The kit comes from the `stageshow` skill
and is copied into the project when a demo needs it.
