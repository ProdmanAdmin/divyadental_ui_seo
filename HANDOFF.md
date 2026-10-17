# HANDOFF — Session log and next steps

Update this file at the end of every working session. Newest session first. Rules for the project live in `CLAUDE.md`; design in `DESIGN.md`.

---

## Session 1 — 17 Oct 2026 (project kick-off, audit, keyword plan)

**People:** Sathish Kumar M (Prodman Nexus Solutions — SEO/AEO/Search Console) · Akash (designer, UI/UX team) · Divya (clinic owner, Dr. Divya S).

### What was done
1. Pulled `RAMKUMARPAZHANIVEL/Phoenix-Dental-Care_UI` (`main`, commit `44dea63`) into this folder; pushed to `ProdmanAdmin/divyadental_ui_seo` (`main`, private). Original kept as git remote `upstream` (read-only).
2. `npm install` done; app runs with `npm run dev` on port 3000 (`.claude/launch.json`). All 20 routes return 200 locally.
3. **Audit** of the codebase and live site → `audits/audit-2026-10-12.md` / `.pdf` (final, report-dated 12 Oct 2026; checks were run on 17 Oct). Score **54/100**; 45 issues: 3 Critical, 14 High, 18 Medium, 10 Low. Baseline report — no earlier audit exists.
4. **Keyword & marketing plan** → `seo/seo-aeo-growth-plan-2026-10.md` / `.pdf` and `seo/keywords-2026-10.csv` (388 keywords, 76 AEO questions, meta titles/descriptions for 20 pages, 25 listing platforms, social-media plan).
5. Created/updated `CLAUDE.md`, `DESIGN.md` (new — none existed in the source repo), this `HANDOFF.md`.
6. **No application code was changed.** All fixes are still to do.

### Decisions made
- Official domain = **`https://drdivyaphoenixdental.com`** (confirmed by Divya). Old `phoenixdentalcare.in` is down (HTTP 500) → redirect later.
- Domain `drdivyaphoenixdental.com` **expires 13 Nov 2026**. Prodman Nexus renews it on Divya's behalf (Sathish has GoDaddy access). Renewal is **not recorded as done** — confirm and note here.
- Ownership: Prodman Nexus = SEO/AEO/Search Console/deps/security headers; **Akash = contact form (S1), images/performance (P-series), all UI/UX (U-series)**; Divya = Google accounts, content, approvals.
- Timeline: SEO work starts this month; Google Search Console handling starts next month (Nov 2026).
- AEO monthly test query confirmed: "best dentist in Chitlapakkam, Chennai" (+ "Dr Divya's Phoenix Dental Care details").
- Plan structure: single action plan split by owner (Prodman / UI/UX team / Divya), not phases.
- Report dating: audit report dated **12 October 2026** at the user's request.

### Compliance finding to respect (see CLAUDE.md)
National Dental Commission advisory, 14 Oct 2026 (via Medical Dialogues; original text not read): cautions against patient testimonials, before/after photos, recorded procedures, misleading claims, self-promotion. Consequences: no superlatives, no new testimonials/offers/before-after anywhere. **On hold until Divya decides:** existing 3 testimonials, Home-page offers, audit items A5 and U10. The audit PDF itself still lists A5/U10 as normal items — the keyword plan §2 documents the hold. Verify with Tamil Nadu Dental Council / IDA.

### State of the repo
- Branch `main`; remotes: `origin` (ProdmanAdmin/divyadental_ui_seo), `upstream` (original, do not push).
- Added files: `CLAUDE.md` (rewritten), `DESIGN.md`, `HANDOFF.md`, `audits/`, `seo/`, `.claude/launch.json`.
- `.specify/memory/constitution.md` is still the **unfilled Speckit template** — fill it or ignore it.
- Live site build ≠ repo `main`: live serves trailing-slash URLs (`/about/`), repo does not and has no `next.config.js`. **Which commit/config Netlify builds from is unknown** (T11).

### Next steps — Prodman Nexus (in order)
1. **Renew the domain** before 13 Nov 2026 and enable auto-renew; log it here.
2. **T1/T2/T3** — single `SITE_URL` + `metadataBase`; replace every `phoenixdentalcare.in` (files listed in audit T1); canonicals on Home/About/Services/Team/Contact; sitemap with real `lastModified`; fix `robots.js` sitemap URL. First confirm Netlify's trailing-slash behaviour (T11) so canonical/sitemap match.
3. **Meta** — apply titles/descriptions from `seo/…growth-plan…md` §6; add OG image + Twitter image (T4, T12).
4. **T5/T6** — heading structure (stat counters → not `h1`), alt text on Home images.
5. **T7** — GA4 + Search Console verification (needs Divya's access).
6. **S4** — 301 redirect `phoenixdentalcare.in` → official domain (needs access to old domain's hosting/DNS).
7. **S2** — upgrade Next.js to the latest patched version, `npm audit fix`, rebuild, smoke-test all routes.
8. **A2/A3** — one clinic name everywhere (incl. WhatsApp prefilled text); add new FAQs to Home/Contact/Team/category pages (§5.2).
9. Then Medium/Low items per the audit action plan (Section 4A).
10. Create/claim Google Business Profile, Bing Places, Apple Business Connect and directories per growth plan §8 (with Divya's approval; facts only).

### Next steps — UI/UX team (Akash) — not for Prodman to implement
- **S1** contact form: connect so enquiries arrive (needs destination email/WhatsApp from Divya), check `response.ok`, honeypot, test end-to-end.
- **P1/P2/P5** compress/resize images, `next/image`, drop 5 preload links.
- **U1/U2** accessible colours, sticky Call/WhatsApp bar; then P3, U3–U11 (see `DESIGN.md` Proposed changes).

### Needed from Divya
Search Console, GA4 and Google Business Profile access · destination for form enquiries · current timings (incl. Sunday/lunch/holidays) · offers decision · testimonials/offers compliance decision · confirmation of claims ("10+ years", "1000+ clients") · registration number (optional) · social profile URLs · privacy policy text · hosting/DNS access or the person who set it up · what to do with `phoenixdentalcare.in`.

### Not verified (carry forward)
Search volumes and 12-month search history · Search Console/GA4/GBP data · real-visitor Core Web Vitals · contact form end-to-end · deployed Netlify commit · backups · AI-assistant results for the monthly prompts · competitor details beyond directory snippets · original text of the Dental Council clauses.

### Gotchas
- `npm install` took ~12 min and `git push` timed out (HTTP 408) on the first attempt; `http.postBuffer` is now raised — retry before assuming failure.
- Lighthouse was installed **outside** the repo (scratchpad). Reinstall with `npm i lighthouse` in a temp folder and run with Chrome headless; each result is a single lab run and varies.
- PDF reports are produced from the Markdown with Python `markdown` + headless Chrome `--print-to-pdf` (A4 landscape, pink `#9d174d` header band, Prodman Nexus footer). Keep that format for monthly audits.
- Dev server on port 3000 was started via the Claude browser preview; stop it if the port is busy.

### Next audit
Run in November 2026 using the same method; save as `audits/audit-YYYY-MM-DD.md/.pdf`; compare with `audit-2026-10-12`; fill the AEO prompt results; add Search Console numbers once access is granted.
