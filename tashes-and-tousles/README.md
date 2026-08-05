# Tashes & Tousles — salon site

A single self-contained page for a unisex salon in Ahmedabad. Open
`index.html` in a browser; there is no build step and no server needed.

Everything is inlined (Three.js r-latest, Playfair Display and Inter as
base64 woff2), so the page works offline and from a `file://` URL. Total
weight is ~0.9 MB.

This is **separate from the Janhit Watch Astro site** in the repo root and
shares nothing with it.

## Editing

Edit `src.template.html`, not `index.html`. The template is the same page with
`/*__FONTS__*/` and `/*__THREE__*/` placeholders where the ~900 KB of inlined
assets go — it is readable and diffable, while `index.html` is not. Rebuild by
substituting the two placeholders with the font CSS and the Three.js bundle.

For small copy or CSS tweaks it is safe to edit `index.html` directly, as long
as you make the same change in the template so the next rebuild keeps it.

## Replace before going live

| Where | Placeholder |
|---|---|
| Address | `Shop 4, Silver Oak Complex, CG Road, Navrangpura, Ahmedabad 380009` |
| Phone | `+91 98250 00000` |
| Email | `hello@tashesandtousles.in` |
| Testimonials | Three quotes in the "Voices" section, marked *Sample copy* on the page |

The testimonials are written as placeholders and labelled as such in the UI —
swap in real client reviews (with permission) and delete the label.

Prices in the menu are plausible Ahmedabad rates, not quotes. Check them.

## The 3D scene

Strands are `TubeGeometry` tubes built once at load, then animated entirely in
the vertex shader via `onBeforeCompile` — no geometry is rebuilt per frame.
Camera and strand motion are scrubbed continuously off scroll position with a
lerp, so nothing snaps at a threshold.

- Renders through `setAnimationLoop`, paused on `visibilitychange`
- Sized by `ResizeObserver` on the canvas parent, `devicePixelRatio` capped at 2
- Geometry, materials and renderer disposed on `pagehide`
- No shadow maps — nothing in the scene receives them
- `prefers-reduced-motion` swaps the loop for scroll-positioned static renders
- Falls back to plain page if WebGL is unavailable

## Theming

Dark is the intended world. A warm light variant is fully implemented and
follows the OS setting, and `data-theme="dark"｜"light"` on `<html>` overrides
it in both directions. Scene lighting, exposure and material roughness shift
with the theme, not just the CSS.
