# Phoenix Dental Care — Project Instructions

Website for **Dr. Divya's Phoenix Dental Care**, Chitlapakkam, Chennai.
Live site: https://drdivyaphoenixdental.com (hosted on Netlify). Stack: Next.js 14.2.5 (App Router, JavaScript), Tailwind CSS 3, Framer Motion, react-icons. No database, no admin, no test/lint/type-check scripts.

The treatment-pages upgrade (specs/001, specs/002) is **built**. The current phase is **SEO / AEO fixes and growth**, driven by the final audit and the keyword plan below. Follow those documents whenever you touch the site.

## Read first — source-of-truth documents

| Document | Use it for |
|---|---|
| `audits/audit-2026-10-12.md` (+ `.pdf`) | **Final audit.** 45 issues with IDs: T = Technical SEO, A = AEO, P = Performance, U = UI/UX, S = Security. Quote the ID in commits and in HANDOFF.md. |
| `seo/seo-aeo-growth-plan-2026-10.md` (+ `.pdf`) | Keyword map (§4.8), meta titles & descriptions for all 20 pages (§6), AEO questions (§5), listings (§8), social (§9), compliance rules (§2). |
| `seo/keywords-2026-10.csv` | 388 keywords with intent, target page and priority. |
| `DESIGN.md` | Colours, fonts, layout, component patterns, accessibility rules. |
| `HANDOFF.md` | Where the last session stopped, decisions, next steps. **Read at session start, update at session end.** |
| `specs/001-…`, `specs/002-…` | Original feature specs (multi-page SEO upgrade, treatment pages). |

## Fixed business facts (single source: `practiceInfo` in `app/utils/config.js`)

- Name: **Dr. Divya's Phoenix Dental Care** (use this exact spelling everywhere; the header currently drops the full stop and the WhatsApp text says "Phoenix Dental Clinic" — audit A2)
- Address: No 58/60, Ground Floor, Anna Street, Chitlapakkam, Chennai – 600064
- Phone / WhatsApp: +91 90032 26380 · Email: phoenixdentalc@gmail.com
- Hours: Monday–Saturday 9:00 AM–8:00 PM; Sunday by appointment only
- Doctor: Dr. Divya S, BDS, MDS – Pediatric and Preventive Dentistry; Associate Professor in Dental College
- **Official domain: `https://drdivyaphoenixdental.com`** (confirmed by Divya). `phoenixdentalcare.in` is the old domain, currently returning HTTP 500; it should 301-redirect to the official domain.
- Never invent facts (prices, insurance, EMI, parking, registration number, services). If it is not on the site or confirmed by Divya, ask or leave it out.

## Who does what

| Owner | Scope |
|---|---|
| **Prodman Nexus Solutions — Sathish Kumar M** | SEO, AEO, structured data, metadata, sitemap/robots, Search Console, analytics, dependency updates, security headers, domain renewal (on Divya's behalf), monthly audit. |
| **UI/UX team — Akash (designer)** | Contact form fix and connection (S1), image optimisation and speed (Performance section, P1–P7), all UI/UX items (U1–U11): colours, call/WhatsApp bar, tap targets, accessibility, footer icons, typography. |
| **Divya** | Google Search Console / Business Profile / Analytics access and monthly checks, timings, offers, photos, approvals, compliance decisions. |

If a task belongs to Akash, do not implement it unless the user asks; record it in HANDOFF.md instead.

## Rules for every change

### SEO (audit T-series)
1. **One site URL.** Never hard-code a domain. Use one `SITE_URL` constant (env `NEXT_PUBLIC_SITE_URL`, default `https://drdivyaphoenixdental.com`) and set `metadataBase`. Remove every `phoenixdentalcare.in` reference (T1).
2. Every page needs an **absolute, self-referencing canonical** (T3), unique title (≤ 60 chars) and unique description (≤ 155 chars), Open Graph and Twitter tags with an image (T4). Use the exact titles/descriptions in `seo/…growth-plan…md` §6 unless the user changes them.
3. **One `<h1>` per page**, no skipped heading levels. Stat counters, footer headings and card titles must not be `h1`/`h4` abuse (T5).
4. Every `<img>`/`next/image` has meaningful `alt`; decorative images use `alt=""` (T6).
5. Sitemap: correct domain, real `lastModified` per page (not build time), URL form that matches the live trailing-slash behaviour (T2, T10). **Confirm which commit/config Netlify deploys before changing URL form** — live serves `/about/`, repo `main` serves `/about` (T11).
6. Keep robots allowing Googlebot, Bingbot, OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot. Never add `noindex` by accident.
7. Structured data: keep `Dentist`, `Physician`, `BreadcrumbList`, `MedicalProcedure`, `FAQPage`; add `image/logo`, `geo`, `hasMap`, `sameAs`, Sunday hours; `provider.address` must be a `PostalAddress` (T8).
8. Keyword work: take the page's main + supporting keywords from the keyword map (§4.8 of the growth plan). Natural, patient-focused wording — **no keyword stuffing**.

### AEO (audit A-series)
- Treatment pages keep **answer-first FAQs** (first sentence = the answer, 40–60 words) with FAQ JSON-LD. Add the "new questions" listed in growth plan §5.2 to Home, Contact, Team and the five category pages (A3).
- Show Dr. Divya's name, credentials and a "last reviewed" date on treatment pages.
- Add `public/llms.txt` (A1) — optional, low priority.
- Monthly: run the 12 AI test prompts (growth plan §5.3) and record results in HANDOFF.md.

### Compliance — dental advertising in India (read before writing any copy)
The National Dental Commission's advisory of **14 October 2026** (reported by Medical Dialogues; cites Revised Dentists (Code of Ethics) Regulations 2014, Chapter VI, Clauses 8.1–8.3) cautions against patient testimonials, before/after photographs, recording or broadcasting procedures, misleading claims, self-aggrandising publicity and oversized signboards. Therefore:
- **Never** call the clinic "best", "top", "No. 1", "leading"; never promise results or "100% painless"/"guaranteed". Use "gentle", "comfortable", "child-friendly".
- **Do not add** testimonials, before/after images, patient photos, patient names, recorded procedures, or offers/discounts to pages, metadata, social posts or ads.
- **On hold pending Divya's decision:** the 3 existing testimonials (Home + every treatment page), the Home-page offers ("Free consultation", "Upto 700", referral), the "real reviews" and before/after-gallery suggestions (audit A5, U10). Do not expand them; do not remove them without being asked.
- The original regulation text could not be read; the advisory comes from one news source. Divya should confirm with the Tamil Nadu Dental Council / IDA.

### Images and performance (audit P-series — owner: UI/UX team)
- Use `next/image` with `sizes` and explicit dimensions; `priority` only for the single LCP image. No raw `<img>` for content.
- Source images ≤ ~1600 px wide, WebP/AVIF, target ≤ 200 KB each. Never add a photo larger than 500 KB. (Today `periodontics.jpg` is 12.4 MB, `tooth_replacement.jpg` 8.6 MB, `braces.jpg` 6.6 MB, `laser_dentistry.jpg` 4.0 MB — P1.)
- Avoid unnecessary client JavaScript; prefer Server Components; Client Components only for interaction (forms, menu, slider, counters).
- Targets: Lighthouse performance ≥ 90 mobile and desktop on Home, Services, a treatment page and Contact (baseline: Home mobile 39, desktop 64).

### UI/UX and accessibility (audit U-series — owner: UI/UX team)
- WCAG AA: text contrast ≥ 4.5:1 (brand pink `#ec4899` is only 3.53:1 — see DESIGN.md), tap targets ≥ 44×44 px (24×24 minimum), labelled buttons/iframes/links, visible focus states, keyboard access.
- Preserve the current visual identity unless an audit item (e.g. U1 contrast) requires a change; record such changes in DESIGN.md.
- Contact form (S1): must **really deliver** enquiries (Netlify Forms with honeypot, or an email/WhatsApp service), check `response.ok`, show failure honestly, and be tested end-to-end before release.

### Security and dependencies (audit S-series)
- `next@14.2.5` has known vulnerabilities (`npm audit`: 1 critical, 4 high). Upgrade to the latest patched 14.2.x (or 15.x), run `npm audit fix`, rebuild and smoke-test every route. Add security headers in `netlify.toml` (S3). Do not commit secrets; `.env*` is git-ignored.

## Treatment pages module (built — keep intact)

Data-driven: `data/services.js` (15 entries; 10 detailed with benefits, process, FAQs; 5 category entries are thin — T13) → `app/services/[slug]/page.js` → components in `components/services/`. Page sections in order: hero, overview, benefits, procedure, FAQ, before/after (hidden when empty), testimonials, doctor, appointment CTA, related treatments, breadcrumb. Add or edit treatments in data, not by copying pages. Existing slugs must not change (SEO).

## Architecture and style rules (retained from the original project instructions)

- Inspect before changing; reuse existing components, layouts, utilities and styles; do not rewrite working functionality; no new framework or library unless unavoidable.
- Follow existing naming and structure (`app/`, `components/`, `data/`, `app/utils/`); keep components reusable; keep data/config separate from presentation.
- Responsive on mobile, tablet and desktop using the existing Tailwind system.
- Keep changes focused. Do not modify unrelated code to silence warnings.

## Commands

```bash
npm install          # slow on this network (~12 min the first time)
npm run dev          # http://localhost:3000  (also: .claude/launch.json "next-dev")
npm run build        # must pass before every push
```
There is no lint/type-check/test script. Minimum verification: `npm run build` passes, affected routes return 200 locally, new/changed pages checked at 375 px and desktop width. Re-run Lighthouse (`npx lighthouse <url> --preset=desktop|mobile`) when touching images or layout; install it outside the repo.

## Git and workflow

- `origin` = https://github.com/ProdmanAdmin/divyadental_ui_seo (branch `main`). `upstream` = the original Phoenix-Dental-Care_UI repo — **read-only, never push to it**.
- Commit or push **only when the user asks**. Reference audit IDs in commit messages (e.g. `fix(seo): single SITE_URL, canonicals (T1,T3)`).
- Large pushes can time out on this network (`git config http.postBuffer` is already raised); retry before assuming failure.
- At the end of every session update **HANDOFF.md** (done / decisions / next steps / open questions).

## Monthly routine

Run the audit again on the live site, save `audits/audit-YYYY-MM-DD.md` + `.pdf` (same format as `audit-2026-10-12`), compare with the previous report (score, fixed / still open / new), and refresh the AI-prompt test results. Report format and the care-routine checklist are in the 12 Oct report.

## Agent behaviour

1. Read HANDOFF.md, then the audit/plan sections relevant to the task.
2. Do not start by creating files blindly; inspect the repository first.
3. When requirements are ambiguous, ask or document the assumption.
4. Report faithfully: say what was verified and what was not; mark anything unchecked "Not verified".
