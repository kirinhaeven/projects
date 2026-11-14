# Projects

A collection of standalone websites built with a single-file approach — one `index.html` per site, inline CSS/JS, no build step.

## Sites

- **[Petalyx](./petalyx/)** — cherry-blossom anime-watercolor SaaS landing page for benchmarking AI agents. GSAP intro zoom, pinned stats with scrubbed counters, hover accordion, falling petals, animated footer mark.
- **[Vinyl](./vinyl/)** — editorial music/streaming site with a video hero, ticker, and smooth-scroll nav across discover / library / artists / pricing / play sections.
- **[Fernhollow](./fernhollow.html)** — separate finished site (kept untouched).
- **[LaunchPad](./launchpad-site/)** — multi-page SaaS landing (index, features, pricing, privacy, terms, 404).

## Templates

Reusable reference snapshots live in [`templates/`](./templates/) — see [`templates/README.md`](./templates/README.md).

## Build approach

Each site is a single `index.html` with inline `<style>` and `<script>`. Stack: GSAP 3.12.5 + ScrollTrigger 3.12.5 + Lenis 1.1.13, with Inter Tight / Space Grotesk typography. No build step, no local assets — all images and video load from verified URLs.