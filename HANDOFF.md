# HANDOFF — Session log and next steps

Update this file at the end of every working session. Newest session first. Rules for the project live in `CLAUDE.md`; design in `DESIGN.md`.

---

## Session 4 — 24 Oct 2026 (code: Task 1 — correct website address)

### Task 1 done (audit T1, T2, T3, T10) — not committed yet
- `app/utils/config.js`: new `SITE_URL` (env `NEXT_PUBLIC_SITE_URL`, default `https://drdivyaphoenixdental.com`), `absoluteUrl(path)` (trailing-slash form), `CONTENT_UPDATED = "2026-10-24"` for sitemap dates — **update this date whenever page content changes** (or set `updatedAt` on a service in `data/services.js`).
- New `next.config.js` with `trailingSlash: true` to match the live site (`/about/`). No next.config existed in repo history; the live trailing slash came from an unknown deployed config (T11).
- `app/layout.js`: `metadataBase` from `SITE_URL`; OG logo now relative.
- Canonical + `og:url` on Home, About, Services, Team, Contact (new) and all 15 treatment pages (now on the official domain). JSON-LD `url`/breadcrumb `item` values use the official domain.
- `app/robots.js`: sitemap → `https://drdivyaphoenixdental.com/sitemap.xml`. `app/sitemap.js`: official domain, trailing slashes, fixed `lastModified` instead of build time.
- Verified: `npm run build` passes (25 pages); locally all 20 pages return 200 with self-referencing canonicals; `/about` → 308 `/about/`; internal links use trailing slashes; sitemap lists 20 URLs; **0** occurrences of `phoenixdentalcare` in any page, robots or sitemap output.
- **Still open:** which repo/branch Netlify deploys from (T11) — changes reach the live site only once Netlify builds from code that contains them.

### Task 2 done (audit T12, T4) — branch `seo/task-2-meta` (from `seo/task-1-site-url`), not committed yet
- New `app/utils/seo.js` → `pageMetadata({ title, description, path, image })`: full title (`title.absolute`, no double suffix), description, canonical, Open Graph (title, description, url, site name "Dr. Divya's Phoenix Dental Care", `en_IN`, image) and Twitter (`summary` with logo, or `summary_large_image` with the page photo).
- Home, About, Services, Team, Contact use `pageMetadata` with the Growth Plan Appendix A text. Treatment pages read `metaTitle`/`metaDescription` from `data/services.js` (all 15 now set; the 5 category entries had none before).
- Verified from the build output: all 20 pages match Appendix A exactly (titles 51–60 chars, descriptions 134–155), canonical on the official domain, OG + Twitter image present.
- Known limit: 7 treatment pages use very large photos as their social image (braces 6.6 MB, tooth_replacement 8.6 MB, periodontics 12.4 MB, laser 4 MB) — WhatsApp/Facebook previews may not show until the UI/UX team compresses images (P1).

### Task 3 in progress — branch `seo/task-3-headings-keywords` (from `seo/task-2-meta`)
- Task 2 committed and pushed to `seo/task-2-meta` (`feat(seo): approved titles…`).
- Task 3 scope expanded (agreed with Sathish): headings + photo descriptions (T5, T6) **plus keyword placement** in visible content (H1 with location, a keyword opening line, keyworded section headings) from Keyword Library §2.10.
- Check before changes: location in H1 on 0/20 pages; main keyword phrase in page text on 1/20 (About).
- Wording drafted for approval: `seo/task-3-wording-for-approval.md/.pdf` (20 H1s, 20 opening lines, section-heading pattern, 6 photo descriptions, heading-level fixes). **Approved 24 Oct 2026** (Home option A, Divya title wording OK, remove "at Phoenix Dental Care" from stock-photo alts) **and applied** — see below. Open questions in it: Home H1 option A/B, Divya's title wording, removing "at Phoenix Dental Care" from stock-photo descriptions.
- New `tools/md2pdf.py` (+ `tools/logo-40.jpeg`): reusable branded PDF builder, because the session scratchpad gets cleared.

### Task 3 done (T5, T6 + keyword placement) — branch `seo/task-3-headings-keywords`, not committed yet
- H1 with location on all 20 pages (Home: small H1 line "Dental Clinic in Chitlapakkam, Chennai" in `text-pink-700` above the unchanged tagline, now a `<p>`). Treatment H1s/opening lines come from new `heading` and `intro` fields in `data/services.js`.
- Opening keyword line on all 20 pages; treatment section headings now "About X", "Benefits of X", "X: Step by Step", "X — Frequently Asked Questions", "Book X in Chitlapakkam" (components take a `name` prop).
- About copy: "trusted" and "painless dentistry" removed. Team title: "Founder & Chief Dentist · Adult and Child Dental Surgeon · Consultant Paediatric Dentist". 10 treatment `heroAlt`s no longer say "at Phoenix Dental Care".
- Heading levels: Stats counters, testimonial names, footer brand → `<p>` (heading font kept via `[font-family:var(--font-heading)]`); Home section titles h3→h2, treatment names h4→h3; footer h4→h2; ServiceCard h3→h2; DoctorCard `headingLevel` prop (h3 on treatment pages); Home h5 → p.
- Alt text: 5 Home slider photos + dentist illustration (Home and DoctorCard via `imageAlt`).
- Verified: one H1, no skipped levels, no images without alt on all 20 pages; `npm run build` passes. Before/after review: `seo/task-3-before-after.pdf` (12 pages).
- Not changed (flag for later): visible "Painless & Laser Dentistry" label in the Home slider and Home treatments list; testimonials (on hold).
- **Revised after Sathish's review (same day):** location text was over-repeated (77 mentions across pages). Rule now: **location added once per visible page** — Home: the small H1 line; other pages: the opening line. Reverted: treatment H1s back to the treatment name (`heading` fields removed), H1s on About/Services/Contact back to the originals (Team → "Meet Dr. Divya S"), Home opening-line location, Home "Our Treatments"/"Contact Us", Contact "Clinic Information", treatment headings "Benefits"/"Treatment Process"/"Frequently Asked Questions"/"Ready to Book Your …?". Kept: "About [treatment]", intros, alt text, heading-level fixes, compliance edits, Team title. Location stays in meta titles/descriptions. Result: 39 mentions (the extra one per page is the existing address or the on-hold testimonial). Before/after PDF regenerated (v2); the earlier v1 duplicated Root Canal part 1 as part 2 (sips crop bug) — fixed by cropping with Chrome.
- **Second review (same day):** Services intro reverted to the original (added sentence removed); Team "Our Doctors" section reverted (H1 + intro original; doctor title change kept); Contact intro rewritten as one paragraph with a tap-to-call number (hours left to the Opening Hours block); long dashes removed from all new text (5 treatment intros, Team and Contact meta descriptions; Growth Plan Appendix A synced); Root Canal intro no longer mentions the location. Pre-existing site text still has some long dashes (not changed). Location mentions now 36. Before/after PDF v3.
- **Task 7 (Analytics/Search Console) skipped** at Sathish's request (24 Oct 2026).

---

## Session 3 — 24 Oct 2026 (documents split into a clear set of three)

### What was done
- The combined plan `seo/seo-aeo-growth-plan-2026-10.*` was split into two documents and removed:
  - **Document 2 — Keyword Library**: `seo/keyword-library-2026-10.md/.pdf` (484 keywords §2, keyword-to-page map §2.10, 81 AEO questions §3, 14 AI test prompts §3.3) + `seo/keywords-2026-10.csv`.
  - **Document 3 — SEO & AEO Growth Plan**: `seo/seo-growth-plan-2026-10.md/.pdf` (compliance §2, research §3, meta §4, AEO playbook §5, listings §6, social §7, 90-day plan §8, open items §9).
  - **Document 1 — Website Health Audit** unchanged: `audits/audit-2026-10-12.pdf`.
- New `DOCUMENTS.md` at the repo root lists the three client documents and the internal docs.
- `CLAUDE.md` references updated to the new files and section numbers.
- Content is unchanged apart from cross-references and the document-set header. No application code changed.
- **Later the same day:** Document 3 rewritten as a **client edition (version 3)** after feedback that it was not client-friendly: clickable index; §1 at a glance; §2 what we fix (high level, with owner); §3 gains by end of Nov 2026 and over 2–3 months, each with "how you can check"; §4 keyword implementation steps + 12 tracked keywords + self-check searches; §5 AEO; §6 listings; §7 social; §8 never-publish rules and decisions; §9 needs from Divya; §10 monthly report. All technical tables moved to Appendices A–H (meta = App. A).
- Rule recorded in CLAUDE.md: client documents lead with index → fixes → outcome → how to check; technical detail in appendices.
- **Not committed or pushed** (Session 2 and 3 changes are both pending the user's go-ahead).

### Section-number changes (old combined plan → new)
Keyword library §4.x → Keyword Library §2.x · AEO questions §5.x → Keyword Library §3.x · In the v3 client edition: Meta → Appendix A · Listings → §6 + Appendix B · Social → §7 + Appendix C · Research & rules table → Appendix D · AEO checklist → Appendix E · Open items → Appendix F · 90-day plan → Appendix G. References in Sessions 1–2 below use the old numbers.

---

## Session 2 — 18 Oct 2026 (keyword plan v2: Dr Divya's background)

### What was done
- Sathish provided Dr Divya's background: **BDS, MDS; Associate Professor; Adult and Child Dental Surgeon; Consultant Paediatric Dentist; 7.5 years hospital & clinic experience; 7.8 years in dental college.**
- Keyword plan updated to **version 2** (`seo/seo-aeo-growth-plan-2026-10.md/.pdf`, `seo/keywords-2026-10.csv`):
  - New **§4.8 credentials, specialty & experience** — 42 keywords (pedodontist, consultant paediatric dentist, adult and child dental surgeon, MDS, associate professor).
  - New **§4.9 procedure & benefit terms** re-taken from every treatment page — 54 keywords.
  - Total **484 keywords** (was 388); rows 389–484 appended, earlier numbering unchanged. Keyword map moved to **§4.10**, adjacent searches to **§4.11**.
  - Meta for Home, Team and Pediatric Dentistry updated with the credentials (all within 60 / 155 characters).
  - 5 new AEO questions about Dr Divya (**81** total), 2 new AI test prompts (**14** total), updated Instagram/Facebook/LinkedIn/GBP bios, listing description, hashtags, compliance row for qualifications and experience.
- `CLAUDE.md` updated: doctor facts, keyword counts, section numbers, prompt count.
- The PDF build scripts lived in a temporary scratchpad that was cleared between sessions; the plan was patched from the committed Markdown instead. To rebuild a PDF: Python `markdown` + headless Chrome, same CSS as before (see Gotchas in Session 1).
- No application code changed. **Not committed or pushed yet** (waiting for the user's go-ahead).

### Decisions / open points
- Experience is stated as two separate facts (7.5 years practice, 7.8 years teaching), never summed. The site counter shows "10+ years" — **Divya to confirm** whether to change it.
- "Consultant Paediatric Dentist" taken from the note "Consultant peadiatric consultant" — **Divya to confirm the exact designation wording** before it goes on the site or listings.

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
