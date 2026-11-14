# Design Reference Templates

These are saved snapshots of sites built in this workspace. **Consult them before designing a new site** — they encode the structure, tokens, animation machinery, and quality bar that have already been verified to work.

| File | Vibe | Use as reference when... |
|---|---|---|
| `petalyx-reference.html` | Cherry-blossom anime-watercolor SaaS (anime/pastel, GSAP intro zoom, pinned stats, hover accordion, falling petals, animated footer mark) | The user wants something polished/playful, needs a pinned stats section, a hover accordion, or a strong animated intro. |
| `vinyl-reference.html` | Editorial music/streaming (dark hero video, ticker, discover/library/artists/pricing/play sections, smooth-scroll nav) | The user wants a content-heavy site with multiple sections, a video hero, and smooth in-page navigation. |
| `fernhollow-reference.html` | (separate finished site — do not delete) | General reference for layout/typography. |
| `launchpad-reference.html` | Multi-page SaaS landing (index/features/pricing/privacy/terms/404) | The user needs a multi-page site, pricing table, or legal pages. |

## How to use these
1. Read the closest match(es) before writing any HTML. Look at the design tokens (`:root`), the intro shell, the Lenis+GSAP wiring, the responsive breakpoints, and the verification-relevant details (no horizontal overflow, `overflow-x: hidden`, `#app overflow: clip`).
2. Adapt the structure and machinery; replace the copy, imagery, and palette with what fits the new brief. Do not copy the Petalyx/Vinyl copy verbatim (headlines are specific to those brands).
3. After building, run the verification checklist in the `website-build-playbook` skill.

## Notes
- These are **references, not starters**. Strip what doesn't apply; don't ship a site that still says "Petalyx" or "Vinyl".
- Petalyx is single-file (`petalyx/index.html` in the repo); vinyl is `vinyl/index.html`.
- Keep these in sync if a reference site is substantially improved.