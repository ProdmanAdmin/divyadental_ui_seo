# Design and Speed Fixes: Brief for Akash

| Prepared by | For | Date | Purpose |
|---|---|---|---|
| Prodman Nexus Solutions, Sathish Kumar M | Akash, UI/UX designer | 27 October 2026 | The contact form, speed and design fixes from the October website audit that belong to the design team, in priority order, with what "done" means for each |

---

## Index

| # | Section | What you will find |
|---|---|---|
| 1 | [Summary](#summary) | Where the website stands and what we need from you |
| 2 | [Ground rules: please do not break these](#rules) | The search work already done, and the dental advertising rules |
| 3 | [Your tasks in priority order](#tasks) | 16 items, each with the problem today, what to do and when it counts as done |
| 4 | [Speed and quality targets](#targets) | Google's website test scores today and the targets |
| 5 | [Design values to use](#values) | Colours, sizes and photo rules |
| 6 | [What Divya needs to give you](#divya) | Facts and approvals you will need |
| 7 | [Checklist before you hand over](#handover) | Tick these before each release |

---

## 1. Summary {#summary}

| Topic | In short |
|---|---|
| **Where the website stands** | The health score went from 54 to **78 / 100** after this month's search work. Most of what is left belongs to the design team: today your items hold back about **15 points**. |
| **Most urgent** | (1) The **contact form** shows "Message Received!" but may not deliver the enquiry to the clinic. (2) The **home page weighs about 12 MB** because of very large photos, so phone visitors wait and leave. |
| **Good news** | The Services and treatment pages are already light (under 1 MB) and score 91 to 100 for speed. The home page needs the same treatment. |
| **Target** | Contact form tested end to end; Google's website test **90 or more** for Speed and **95 or more** for Accessibility on the Home, Services, Root Canal Treatment and Contact pages, on phone and computer. |
| **Publishing** | The hosting plan accepts updates from **one linked account only**. Agree with Sathish how your changes will be published **before you start**, or the update will be blocked. |

---

## 2. Ground rules: please do not break these {#rules}

### 2.1 Search work already done (keep it as it is)

| Keep | Why |
|---|---|
| **Page addresses** of every page and treatment | Changing them loses Google rankings. |
| **One main heading per page**, and headings in order (main heading, then section headings, then sub-headings) | Google reads headings as chapter titles. Several pages had this fixed in October. |
| The small line **"Dental Clinic in Chitlapakkam, Chennai"** above "Rejuvenating Smiles..." on the home page | It is the home page's main heading for Google. You may restyle it but keep the text and keep it the main heading. |
| Stat numbers, testimonial names and footer titles are **styled like headings but are not headings** | They were changed in October so Google is not confused. Keep the look, not heading tags. |
| A **description on every photo**; decorative images marked as decorative | Google and screen-reader users rely on them. Add one for every new photo. |
| The **"Frequently Asked Questions"** sections on Home, Contact, Team and the treatment pages | They help Google and AI assistants quote the clinic. |
| The clinic name **"Dr. Divya's Phoenix Dental Care"** (with the full stop) in the header, footer and WhatsApp message | One exact name everywhere. |
| The footer links to **Areas We Serve**, **How to Choose a Dentist** and **View all treatments** | Added in October; they help patients and Google find these pages. |
| The page names in the browser tab and the sharing previews | Written to an agreed plan; do not edit them. |

### 2.2 Dental advertising rules (National Dental Commission advisory, 14 October 2026)

| Do not | Use instead |
|---|---|
| Use "best", "top", "No. 1", "leading", "100% painless", "guaranteed" | "gentle", "comfortable", "child-friendly" |
| Add testimonials, patient names or photos, before-and-after photos, or videos of procedures | Clinic, team and educational images only |
| Add or expand offers and discounts | The existing testimonials and home page offers stay as they are until Divya decides. Do not remove or change them unless asked. |

---

## 3. Your tasks in priority order {#tasks}

Effort: S = under half a day · M = 1 to 2 days · L = 3 days or more. "Ref" is the issue number in the October audit, used in all our reports.

| # | Ref | Priority | Task | The problem today | What to do | Done when | Effort |
|---|---|---|---|---|---|---|---|
| 1 | S1 | Critical | **Fix and connect the contact form** | The form shows "Message Received!" even when nothing is delivered. It is not connected to any delivery service, and it has no spam protection. | Connect it to a service that really delivers each enquiry to the clinic's email or WhatsApp (the hosting's built-in form feature with a hidden spam trap, or an email service). Show "Message Received!" **only** when delivery is confirmed. If sending fails, say so honestly and show the Call and WhatsApp options. | One test enquiry marked "TEST", sent at a time agreed with the clinic, **arrives**. A deliberately failed send shows the error message. Prodman Nexus re-checks it. | S |
| 2 | P1, P2, U3 | Critical | **Shrink the home page photos** | Home page about **12 MB** (healthy: under 2 MB). The four largest photos are the gum care photo (12.4 MB), tooth replacement (8.6 MB), braces (6.6 MB) and laser dentistry (4.0 MB). They are up to 5,472 px wide but shown at 56 to 311 px. Six full-size photos are told to load first. The photo area stays blank for several seconds on phones. | Resize every photo to the size it is shown at (1,600 px wide at most; thumbnails much smaller). Save as WebP or AVIF at about 80% quality, **200 KB or less each, never over 500 KB**. Let only the first, main photo load first; load the rest when needed. Give every photo a fixed width and height so the page does not jump. Use the same automatic image resizing the Services and treatment pages already use. Remove unused duplicate photos. | Home page **under 2 MB**. In Google's website test on a phone, the main content appears within **2.5 seconds** and Speed is **90 or more**. | M |
| 3 | U1 | High | **Make text and buttons easier to read** | Brand pink on white is **3.53 : 1**; the minimum is 4.5 : 1. White text on the green stats bar is 2.54 : 1, and on the WhatsApp button 2.28 : 1. Faint for older patients and in sunlight. | Use a deeper pink for text and buttons, and keep the current pink only for large decorative areas. Darken the stats bar and the WhatsApp button greens. Values in Section 5. Needs **Divya's approval** of the deeper pink: show her a before-and-after first. | Google's accessibility test shows **no colour contrast failures** on the four key pages. | S |
| 4 | U2 | High | **Call / WhatsApp always visible on phones** | On phones the only button at the top is "Book Appointment". Patients must scroll or open the menu to find the number. | Add a phone icon to the header on phones, and a bar fixed to the bottom of the screen on phones with **Call · WhatsApp · Book**. Call: +91 90032 26380. WhatsApp: the same number with the existing pre-filled message. | Visible without scrolling at 375 px width on every page. It does not cover the footer or form buttons. Each button is at least 44 × 44 px. | M |
| 5 | P3 | High | **Make the home page respond faster when first tapped** | Improved after the October software update (frozen time down from 1.2 s to about 0.2 s), but the first screen still animates many items at once. | Animate fewer items on first load. Start animations for lower sections only when they come into view. Respect the phone's "reduce motion" setting. | "Frozen time" (Total Blocking Time) **under 0.2 s** on a phone in Google's test. | S |
| 6 | U4 | Medium | **Visitor counters show "0" at first** | "0 Years of Experience / 0 Smiling Clients" until the visitor scrolls. Search previews and slow phones see zeros. | Show the real numbers from the start; keep the count-up only as an extra effect. **Do not change the numbers** ("10+" and "1000+"): Divya is still confirming the wording. | The numbers are correct even with animations turned off. | S |
| 7 | U5 | Medium | **Dead footer icons; no Privacy or Terms pages** | Facebook, Twitter and LinkedIn icons do nothing. Instagram opens an invite link, not the clinic's profile. "Privacy Policy" and "Terms of Use" are plain text with no pages behind them. | Link the icons to the clinic's real pages once Divya sends them, and remove any she does not have. Create Privacy Policy and Terms of Use pages (text from Divya, or Prodman Nexus can draft it for her approval) and link them. | Every footer icon and link opens the right page. | M |
| 8 | U6 | Medium | **Small buttons and links on phones** | Testimonial slider dots are 8 × 8 px; footer and menu links are 17 px tall; the Instagram icon is 16 × 16 px. | Make tap areas at least **44 × 44 px** (24 × 24 px absolute minimum), with space between them. | Every tap area measures at least 44 × 44 px at 375 px width. | S |
| 9 | U7 | Medium | **Remaining accessibility gaps** | Slider dots have no names. The map has no title. The testimonial slider auto-plays with no pause. Focus outlines are hard to see. (Headings, photo descriptions and link names were fixed in October.) | Name each slider dot ("Show testimonial 1" and so on). Give the map a title ("Map showing the clinic location"). Add a pause button to the slider. Show a clear focus outline on every link and button. Walk through each page using only the keyboard. | Google's accessibility test **95 or more** on the four key pages. Every control can be reached and used with the keyboard. | S |
| 10 | U9 | Low | **"Powered by Netlify" badge on the page** | A third-party badge floats over the page on phones. | Find it in the hosting settings and switch it off (it may depend on the hosting plan). | The badge no longer appears. | S |
| 11 | P4 | Medium | **Photos re-downloaded on every visit** | Design and script files are now saved by visitors' browsers for a year, but photos are not, so returning visitors download them again. | Set long-term browser saving (one year) for photos, after they are optimised in task 2. | Returning visits load photos from the browser, not the network. | S |
| 12 | P6 | Low | **Doctor illustration downloaded on phones where it is hidden** | A 202 KB illustration is loaded first on phones even though it is not shown there. | Load it only on larger screens and optimise the file. | Not downloaded at phone width. | S |
| 13 | P7 | Low | **Extra code for old browsers** | About 11 KB of extra code is sent to support very old browsers. | Set the website to support current browsers only. | Google's test no longer reports "legacy JavaScript". | S |
| 14 | U8 | Medium | **Typos in the offers** | "Referal", "friendsand", "Upto 700" (no currency). | **On hold.** The offers wait for Divya's decision under the advertising rules. If she keeps them, fix the spelling and the amount wording she gives you. | Only after Divya's decision. | S |
| 15 | U10 | Low | **Empty before-and-after gallery** | No photos; the section hides itself. | **No action.** It stays hidden under the advertising rules. | Stays hidden. | None |
| 16 | U11 | Low | **Map cannot be moved or zoomed** | Tapping it opens Google Maps instead. | **Optional.** This is acceptable as it is. | Not required. | None |

---

## 4. Speed and quality targets {#targets}

Google's website test (Lighthouse) results today, 27 October 2026. Each figure is one test run, so expect a few points' difference between runs.

| Page | Device | Speed | Accessibility | Good practice | Search | Page weight | Main content appears |
|---|---|---|---|---|---|---|---|
| Home | Phone | **60** | **86** | 100 | 100 | **about 12 MB** | **very slow** (many seconds) |
| Home | Computer | **64** | **86** | 100 | 100 | about 12.8 MB | 11 s |
| Services | Phone | 91 | 96 | 100 | 100 | 0.5 MB | 2.5 s |
| Root Canal Treatment | Phone | 95 | 96 | 100 | 100 | 0.3 MB | 2.5 s |
| Contact | Phone | 99 | 93 | 100 | 100 | 0.3 MB | 1.9 s |
| **Target, all four pages** | Phone and computer | **90+** | **95+** | **100** | **100** (keep) | **under 2 MB** | **under 2.5 s** |

Accessibility failures reported today: **colour contrast** (all pages), **slider dots without names** and **map without a title** (Home).

---

## 5. Design values to use {#values}

| Item | Today | Use | Contrast with white |
|---|---|---|---|
| Text and button pink | #ec4899 | **#be185d** (deeper pink). Keep #ec4899 for large decorative areas only. Needs Divya's approval. | 3.53 → **6.04 : 1** |
| Stats bar green (white text) | #10b981 | **#047857** | 2.54 → **5.48 : 1** |
| WhatsApp button green (white text) | #22c55e | **#15803d** | 2.28 → **5.02 : 1** |
| Body text on light grey background | grey on #F8F9FA | Keep the current dark greys | Already 4.5 : 1 or more |

| Rule | Value |
|---|---|
| Text contrast | At least 4.5 : 1 (large text and borders at least 3 : 1) |
| Tap targets | At least 44 × 44 px (24 × 24 px absolute minimum) |
| Photos | 1,600 px wide at most; WebP or AVIF; 200 KB or less each; never over 500 KB; fixed width and height; a description on every photo |
| Screen widths to test | 375 px (phone), 768 px (tablet), 1,280 px or wider (computer); no sideways scrolling |
| Fonts | Keep Montserrat for headings and Inter for text |
| Animation | Subtle; few items on first load; respect "reduce motion" |

Please record any colour or style change in the design notes so we can keep the website consistent.

---

## 6. What Divya needs to give you {#divya}

Ask for these through Sathish, who is collecting them from Divya. Tell him as soon as you are blocked.

| Item | Needed for task |
|---|---|
| The email address or WhatsApp number that should receive enquiries | 1 (contact form) |
| A time to send one test enquiry | 1 (contact form) |
| Original, good-quality clinic and doctor photos | 2 (photos) |
| Approval of the deeper pink | 3 (colours) |
| The clinic's real Instagram and Facebook page links | 7 (footer icons) |
| Privacy Policy and Terms text, or approval for Prodman Nexus to draft them | 7 (footer pages) |
| Decision on the home page offers and testimonials | 14 (typos) |

---

## 7. Checklist before you hand over {#handover}

Tick every line before each release, then tell Sathish so Prodman Nexus can re-run the checks.

| # | Check | ☐ |
|---|---|---|
| 1 | The contact form delivered the agreed test enquiry, and a failed send shows an honest error | ☐ |
| 2 | Text contrast at least 4.5 : 1 (3 : 1 for large text and borders) | ☐ |
| 3 | Works at 375 px, 768 px and 1,280 px or wider, with no sideways scrolling | ☐ |
| 4 | Tap targets at least 44 × 44 px; focus outline visible; everything works with the keyboard | ☐ |
| 5 | Every photo has a width, height and description; each 200 KB or less | ☐ |
| 6 | One main heading per page, headings in order; the home page line "Dental Clinic in Chitlapakkam, Chennai" kept | ☐ |
| 7 | No "best", "top" or "No. 1"; no new offers, testimonials or before-and-after photos | ☐ |
| 8 | Page addresses, page names, FAQ sections and footer links unchanged | ☐ |
| 9 | Google's website test on Home, Services, Root Canal Treatment and Contact: Speed 90+, Accessibility 95+, Search 100 | ☐ |
| 10 | Publishing agreed with Sathish (one linked account on the hosting plan) | ☐ |
