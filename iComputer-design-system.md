# iComputer Urban Tech DZ — Design System

Version 1.0 · Dark-first · Algiers, Algeria

This is the working design system for the iComputer website. It replaces the
previous mix of two visual languages (a bright "Apple-style" layer and an older
glassmorphism layer) with one restrained, technical identity built for a
computer-support and B2B services business.

The reference to `DESIGN.md` (Apple design analysis) is limited to general
principles: generous spacing, clear hierarchy, one accent colour, honest
typography, responsive discipline. No Apple branding, product layouts, copy,
or visual identity is reused.

---

## 1. Brand idea

**Positioning:** the reliable IT partner for small professional offices in
Algiers — accounting firms, law offices, notaries, design studios and small
agencies — without the cost of a full-time IT employee.

**Personality:** calm, precise, practical, local, human.

**Visual metaphor:** a well-organised workstation. Dark graphite surfaces,
hairline borders, one signal-blue accent, and monospaced micro-labels. Nothing
glows, floats or blinks for decoration. The interface should feel like a tool,
not a demo.

**Tagline:** “دعم تقني يعمل دون توقف” · “Le support qui fait tourner votre bureau” · “IT support that keeps your office running.”

---

## 2. Colour tokens

Dark is the default theme. Light theme is a complete counterpart, not an
afterthought.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#0B0F14` | `#F5F7FA` | Page canvas |
| `--bg-soft` | `#0E131A` | `#EDF1F6` | Alternating band |
| `--surface` | `#121821` | `#FFFFFF` | Cards, panels |
| `--surface-2` | `#161E28` | `#F0F4F8` | Raised / hover surfaces |
| `--surface-3` | `#1B2532` | `#E7EDF4` | Chips, media frames |
| `--line` | `rgba(255,255,255,.08)` | `rgba(16,23,34,.10)` | Hairline borders |
| `--line-strong` | `rgba(255,255,255,.15)` | `rgba(16,23,34,.18)` | Emphasis borders |
| `--text` | `#EEF3F9` | `#101722` | Headlines and body |
| `--text-soft` | `#C6D0DC` | `#2C3746` | Strong secondary text |
| `--muted` | `#93A0B1` | `#5C6979` | Supporting copy |
| `--faint` | `#6F7C8D` | `#788493` | Meta, captions |
| `--accent` | `#4D9EFF` | `#1668C8` | Single interactive accent |
| `--accent-strong` | `#2D8CFF` | `#0F5DB8` | Primary buttons |
| `--accent-soft` | `rgba(77,158,255,.12)` | `rgba(22,104,200,.10)` | Icon tiles, chips |
| `--success` | `#3DDC97` | `#0E8F5B` | Verified / positive |
| `--danger` | `#FF7A7A` | `#C0392B` | Problems, destructive |
| `--warning` | `#F0B45A` | `#9A6200` | Attention |

**Rules**

- One accent colour only. Green is reserved for WhatsApp / success semantics.
- Never use gradient text. Avoid multi-stop decorative gradients.
- Colour change between surfaces is the primary section divider; borders carry
  the rest of the structure.
- Contrast target: WCAG AA for all text and interactive states.

---

## 3. Typography

| Role | Arabic | Latin | Size / weight |
|---|---|---|---|
| Display | Cairo | Inter | `clamp(2.4rem, 5vw, 4rem)` / 700 |
| H2 | Cairo | Inter | `clamp(1.8rem, 3.2vw, 2.6rem)` / 700 |
| H3 | Cairo | Inter | `1.125rem–1.375rem` / 600–700 |
| Body | Cairo | Inter | `1rem` / 1.7 |
| Lead | Cairo | Inter | `1.0625–1.1875rem` / 1.75 |
| Micro-label | Cairo | Inter | `0.6875rem` / 600 / `0.14em` tracking |
| Numeric / code | Cairo | Inter | tabular numerals |

- Headlines use tight tracking on Latin (`-0.02em`) and normal tracking in Arabic.
- Body copy never below 16px on mobile.
- Arabic line-height 1.75; Latin 1.65.
- Use sentence case. No all-caps Arabic.
- Emojis are not icons. All UI icons are stroke SVGs.

---

## 4. Spacing and layout

- Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 44, 56, 72, 96.
- Container: `1200px`, gutters `24px` desktop / `18px` mobile.
- Section padding: `96px` desktop, `72px` tablet, `56px` mobile.
- Grid: 12 columns conceptually; practical CSS grids of 2, 3 and 4 columns.
- Vertical rhythm: every section has an eyebrow, a title, optional lead, then
  content. No section starts without a clear top label.

### Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| Mobile | ≤ 600px | 1 column, stacked actions, 56px section padding |
| Large phone | 601–767px | 1–2 columns, compact header |
| Tablet | 768–1023px | 2 columns, nav collapses to menu |
| Desktop | 1024–1279px | 3 columns |
| Wide | ≥ 1280px | 4 columns, 1200px content lock |

---

## 5. Shape, border and elevation

- Radii: `8px` inputs/small chips, `12px` buttons/icon tiles, `16px` cards,
  `22px` large panels, `999px` pills only for status chips and language switch.
- Borders: 1px `--line` on every card. Hover raises to `--line-strong` plus a
  faint accent tint.
- Shadows: one soft ambient shadow for media panels only
  (`0 30px 80px rgba(0,0,0,.35)` dark). Cards do not use drop shadows; structure
  comes from borders and surface steps.
- No glassmorphism blur on cards. Blur is allowed only on the sticky header and
  the mobile menu sheet.

---

## 6. Components

### Header
- Sticky, 72px tall, `rgba(11,15,20,.82)` + blur, hairline bottom.
- Brand mark (SVG) + wordmark + “Urban Tech DZ” sub-label.
- Seven nav links, 13.5px, muted; active state uses accent text + 2px underline.
- Actions: compact WhatsApp button, AR/FR/EN segmented switch, theme toggle,
  menu button on ≤1024px.
- Mobile: full-width sheet under the header, links 48px tall, WhatsApp CTA and
  language switch repeated inside; Escape and outside click close it.

### Buttons
- Primary: accent fill, white text, 44px height, 12px radius, subtle hover lift.
- Secondary: transparent with hairline border, text colour, hover surface.
- WhatsApp: success green, white text, no glow.
- Text link: accent, arrow moves 3px on hover.
- Focus: 2px accent outline with 3px offset. Active: `scale(.98)`.

### Service card
- Surface card, 16px radius, 1px border.
- Top row: 44px accent-tinted icon tile + monospace index (`01`).
- Title, two-line description, bottom “details” link with arrow.
- Hover: border accent, icon tile brightens, arrow shifts; transform only 2px.
- Student services card is a wide feature panel with a document-stack
  illustration, three benefit chips and a primary CTA.

### Sector card
- Icon + title, short problem/need sentence, a compact list of what is
  included, and a text link. No red alert boxes — problems are framed as needs.

### Process step
- Numbered 01–04 with a hairline connector on desktop. Titles and one-sentence
  descriptions.

### Contact hub
- Four channel rows (WhatsApp, service request, service area, hours) inside one
  bordered panel; right side holds the primary CTA and note.
- No invented phone number or email. Only links that already exist in the
  business data.

### Footer
- Four columns: brand + socials, services, sectors, quick links.
- Hairline top, 12px meta row, no floating rounded card.
- Social icons are inline SVGs with accessible labels.

---

## 7. Motion

- Durations: 160ms for hover, 240ms for panels, 400ms for reveal.
- Easing: `cubic-bezier(.2,.7,.2,1)`.
- Only transform/opacity are animated. No parallax, no scroll-driven 3D, no
  floating badges, no rotating cubes.
- `prefers-reduced-motion: reduce` disables all motion and reveal transitions.

---

## 8. Iconography

- 24×24 stroke icons, 1.6px stroke, round caps.
- Defined once as an SVG sprite in `js/script.js`.
- Icons are decorative (`aria-hidden="true"`) when adjacent text exists.
- Brand social icons are filled paths, 18px.
- Emoji in legacy markup is progressively replaced by the matching SVG at
  runtime; new markup uses `<svg><use href="#i-…"></use></svg>`.

---

## 9. Accessibility

- Skip link to main content on every page.
- Landmarks: header/nav/main/footer; one H1 per page.
- All interactive targets ≥ 44px.
- Language switch buttons expose `lang` attributes and `aria-pressed`.
- Theme toggle exposes `aria-pressed` and a translated label.
- Mobile menu: `aria-expanded`, `aria-controls`, Escape to close, focus returns
  to the menu button.
- Form labels are explicit; required fields marked with text as well as `*`.
- Decorative images have empty alt; meaningful images have descriptive alt.
- Colour is never the only carrier of meaning.

---

## 10. Content rules

- Speak in outcomes, not technology: “your printer works on every desk” before
  “driver installation”.
- Never promise instant response or guaranteed results. Use “حسب التوفر”
  (subject to availability) where relevant.
- Keep service names identical across navigation, cards, and detail pages.
- Arabic is the source language; French and English are first-class translations
  for all homepage and navigation content.
- No fake testimonials, counters, client logos, prices, or certifications.

---

## 11. Do / Don't

**Do**
- Use the surface ladder (bg → surface → surface-2) for hierarchy.
- Keep one accent and one green.
- Use 1px hairlines and generous internal padding.
- Let the headline carry the page; keep supporting copy short.
- Test Arabic RTL, French and English at 360px, 768px and 1440px.

**Don't**
- Use emojis as interface icons.
- Use gradient headlines, neon glows, glass cards, or 3D floating cubes.
- Import stock photography when a local asset or a diagram will do.
- Add dependencies for icons, animation, or layout.
- Invent contact details or business claims.

---

## 12. Implementation map

| File | Responsibility |
|---|---|
| `css/style.css` | Tokens, reset, typography, header, buttons, shared cards, footer, forms |
| `css/b2b.css` | Page hero, breadcrumbs, service detail layout, final CTA |
| `css/homepage.css` | Hero, trust strip, service grid, student feature, B2B band, sectors, process, contact |
| `css/responsive.css` | Global breakpoints, mobile navigation, grid collapse |
| `js/script.js` | Translations, language switch, mobile nav, icon sprite, reveal |
| `js/theme.js` | Persisted dark/light theme |
| `css/knowledge.css` | Knowledge-base-specific components (uses shared tokens) |
| `css/student-services.css` | Student service page components (uses shared tokens) |
