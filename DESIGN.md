# DESIGN.md — Dr. Divya's Phoenix Dental Care

The pulled source repo had **no design file**, so this one was written from the live code (`tailwind.config.js`, `app/globals.css`, `app/layout.js`, `components/`) and the final audit (`audits/audit-2026-10-12.md`, U- and P-series). Section **Current system** describes what exists today. Section **Proposed changes** lists audit-driven changes that are **not yet applied** — owner: UI/UX team (Akash), needs Divya's approval. Update this file whenever a design decision changes.

CLAUDE.md rule: preserve the current visual identity unless an audit item requires a change.

## Current system

### Colour

| Token / class | Value | Used for | Contrast note |
|---|---|---|---|
| `primary` (Tailwind) | `#ec4899` | Headings on inner pages, buttons (`bg-primary text-white`), active nav, links, offers box, badges | White on it = **3.53:1** — fails AA for normal text (U1) |
| `pink-50` / `pink-100` / `pink-200` | Tailwind defaults | Soft section backgrounds (CTA, About "Our Story", testimonial cards) | — |
| `pink-500` | Tailwind default | Footer title, icons | 3.53:1 on white (U1) |
| Page background | `#F8F9FA` (`bg-[#F8F9FA]`) | `<main>` on every page | — |
| Body text | `gray-700`; headings `gray-800`; secondary `gray-600/500` | Copy | `gray-500` on `#F8F9FA` = 4.59:1 (OK, borderline) |
| `emerald-500` | Tailwind default | Home/About stats bar (white text) | White on it = **2.54:1** (U1) |
| `green-500` | Tailwind default | "Chat on WhatsApp" button (white text) | White on it = **2.28:1** (U1) |
| `red-400/50/500`, `green-50/200/700/800` | Tailwind defaults | Form errors / success state | — |

### Typography (`next/font/google`, self-hosted)

- Headings (`h1`–`h4`, CSS var `--font-heading`): **Montserrat** 600 / 700.
- Body (`--font-body`): **Inter** 400 / 500.
- Page title: `text-4xl font-bold text-primary`; section title `text-2xl font-bold text-gray-800`; hero (treatment) `text-3xl md:text-5xl font-bold text-white`; body `text-base`; small `text-sm`.
- Language: English (`lang="en"`). A Tamil version is not planned (audit T15, Divya's decision).

### Layout and spacing

- Containers: `max-w-7xl mx-auto px-6` (listing/home), `max-w-4xl mx-auto px-6` (treatment pages). Page padding `py-12`; section gap `mb-12`.
- Grids: `md:grid-cols-2`, `lg:grid-cols-3`, `sm:grid-cols-2 lg:grid-cols-3` for cards. Breakpoints are Tailwind defaults (`sm 640`, `md 768`, `lg 1024`).
- Header: sticky, `z-50`, `bg-white/80 backdrop-blur border-b`, logo 48×48 + clinic name, nav hidden below `md`.
- Footer: `bg-white border-t mt-20`, 4-column grid on `md`, bottom bar with © and policy text.

### Components and patterns

| Pattern | Classes / behaviour | Source |
|---|---|---|
| Primary button | `bg-primary text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition font-medium` (large: `px-8`) | Header, hero, CTA |
| Card | `bg-white rounded-xl border hover:shadow-lg transition`, image `h-48` on top, `p-6` body | `ServiceCard` |
| Treatment hero | Full-width `h-72 md:h-96` image, dark gradient overlay, category pill `bg-primary/90`, white H1 | `TreatmentHero` |
| CTA block | `bg-pink-50 rounded-2xl p-8 md:p-12 text-center`, pink H2, primary button | `TreatmentCTA` |
| Offers box | `bg-primary rounded-xl p-10`, white bold list | `home/offers.js` (compliance review pending — CLAUDE.md) |
| Stats bar | `bg-emerald-500 text-white py-32`, 6xl counters animated from 0 | `Stats` (renders "0" before scroll — U4) |
| Mobile menu | Right drawer `w-72`, overlay `bg-black/40`, `animate-slide-in`, Esc closes, `aria-modal` | `mobileMenu.js` |
| Breadcrumb | `nav aria-label="Breadcrumb"`, `ol`, last item `aria-current="page"` | `Breadcrumb` |
| Form field | Label + `border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50`; error `border-red-400 bg-red-50`; success panel `bg-green-50` | `ContactForm` |
| Testimonial slider | Autoplay carousel with 8 px dots (no accessible names, no pause — U6/U7) | `testimonialSlider.js` |
| Map | Google Maps iframe wrapped in a link, `pointer-events-none`, no `title` (U7) | `home/map.js` |
| 404 | Tooth emoji, large `404`, "Back to Home" button | `app/not-found.js` |
| Decorative | Emoji background icons at 8% opacity (`.bg-icon`), `.glassy-dark` / `.glassy-white` panels, `.animate-slow-zoom-loop` | `globals.css` |

### Patterns added during the October SEO work (Tasks 3–10)

| Pattern | Classes / behaviour | Source |
|---|---|---|
| Home main heading line (H1) | Small line above the tagline: `text-sm font-semibold uppercase tracking-wide text-pink-700`; the tagline "Rejuvenating Smiles..." is now a `<p>` with `[font-family:var(--font-heading)]` so it looks the same | `app/page.js` |
| Heading font on non-headings | `[font-family:var(--font-heading)]` keeps the Montserrat look on text that is no longer a heading (stat counters, testimonial names, footer brand) | Tasks 3 heading-level fixes |
| FAQ section | Reuses `TreatmentFAQ` (white `details` cards, `+` icon, answers in `text-sm text-gray-600`) on Home (above Contact Us), Contact (below the form), Team (above the booking box) and Tooth Replacement | `components/services/TreatmentFAQ.js` |
| Numbered checklist cards | `bg-white rounded-xl border p-5` with a pink number circle (`w-10 h-10 rounded-full bg-primary text-white`), H2 title + text | `app/how-to-choose-a-dentist/page.js` |
| Area tags | `bg-white border rounded-full px-5 py-2 font-medium`, wrapped in a flex list | `app/areas-we-serve/page.js` |
| Info card | `bg-white rounded-xl border p-6` with icon rows (address, hours) and a text link | `app/areas-we-serve/page.js` |
| Booking box | Same as `TreatmentCTA`: `bg-pink-50 rounded-2xl p-8 md:p-12 text-center`, pink H2, primary button | Both new pages |
| Footer "Clinic" column | Home · About · Services · Team · Contact · Areas We Serve · How to Choose a Dentist; Services column ends with "View all treatments →" | `components/footer.js` |
| Doctor card heading level | `DoctorCard` takes `headingLevel` (h2 on Team, h3 inside treatment pages); image alt from `imageAlt` | `components/team/DoctorCard.js` |
| Site icons and theme | `app/favicon.ico`, `app/icon.png` (512), `app/apple-icon.png` (180): the logo padded to square on white; manifest + `themeColor` `#ec4899` | `app/manifest.js`, `app/layout.js` |

### Motion

Framer Motion helpers in `app/utils/animations` (`FadeUp`, `StaggerContainer`, `variants`). Keep animation subtle; avoid animating many elements on first paint (Home mobile TBT 1,180 ms — P3). Respect `prefers-reduced-motion` when adding new motion.

### Imagery

Photos in `public/images/` are served through `next/image` on cards and heroes, but raw `<img>` on the Home hero/thumbnails. Several originals are 4–12 MB (P1). Rules: ≤ 1600 px wide, WebP/AVIF, ≤ 200 KB, descriptive alt text. No patient photos, no before/after (CLAUDE.md compliance section). Use clinic, team and educational graphics only.

## Proposed changes (audit-driven — not yet applied)

| # | Change | Audit | Notes |
|---|---|---|---|
| 1 | Add an accessible text/button colour, e.g. `primary-ink: #be185d` (**6.04:1** on white, 5.73:1 on `#F8F9FA`, 5.53:1 on `pink-50`). Keep `#ec4899` for large decorative fills only. | U1 | Needs Divya's approval of the slightly deeper pink. |
| 2 | Stats bar: `emerald-700` (white text = 5.48:1). WhatsApp button: `green-700` (white text = 5.02:1). | U1 | — |
| 3 | Add a **Call / WhatsApp** action visible above the fold on phones: phone icon in the header and a sticky bottom bar (Call · WhatsApp · Book). | U2 | Phone `tel:+919003226380`; WhatsApp `https://wa.me/919003226380`. |
| 4 | Minimum tap target 44×44 px (24×24 absolute minimum): slider dots, footer links, social icons, nav links. Give slider dots `aria-label`s and a pause control. | U6, U7 | — |
| 5 | Accessibility labels: `title` on the map iframe, names on icon-only links/buttons, keyboard-visible focus ring on links and buttons. | U7 | **Partly done (Task 10):** Instagram icon link and Home map link now have names. Still open for Akash: iframe `title`, slider-dot names, focus ring. |
| 6 | Heading structure: stat counters become `<p>`; footer headings `h2`/`h3`; section order H1 → H2 → H3. | T5 | **Done (Task 3, Prodman).** |
| 7 | Footer: real social links or remove Facebook/Twitter/LinkedIn icons; add Privacy Policy and Terms pages; remove the "Powered by Netlify" badge (check Netlify settings). | U5, U9 | Instagram link must be the clinic's profile, not an invite URL. |
| 8 | Render stat values in the HTML (no "0" before scroll); fix typos in offers copy once Divya confirms the offers ("Referal", "friendsand", "Upto 700"). | U4, U8 | Offers are on compliance hold. (Offers list `key`s added in Task 10; text unchanged.) |
| 9 | Home hero: `next/image` with dimensions and `priority` on one image only; thumbnails lazy; no `<link rel=preload>` for five full-size photos. | P1, P2 | — |
| 10 | Before/after gallery stays hidden (component hides when empty). | U10 | On hold — compliance. |

## Checklist before shipping any UI change

- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for large text and UI borders)
- [ ] Works at 375 px, 768 px and ≥ 1280 px; no horizontal scroll
- [ ] Tap targets ≥ 44×44 px; focus visible; keyboard operable
- [ ] Every image has width/height (or `fill` + `sizes`) and alt text; ≤ 200 KB
- [ ] One `h1`, no skipped heading levels
- [ ] No superlatives, offers, testimonials or before/after added (CLAUDE.md)
- [ ] `npm run build` passes; Lighthouse accessibility ≥ 95 on the page touched
