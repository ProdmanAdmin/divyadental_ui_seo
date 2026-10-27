# Dr. Divya's Phoenix Dental Care: Website

Website for Dr. Divya's Phoenix Dental Care, Chitlapakkam, Chennai.
Live site: https://drdivyaphoenixdental.com (hosted on Netlify).

## Tech stack

- Next.js 15 (App Router, JavaScript) and React 19
- Tailwind CSS 3, Framer Motion, React Icons

## Getting started

Requires Node.js 18.18 or later (developed on Node 22).

```bash
git clone https://github.com/ProdmanAdmin/divyadental_ui_seo.git
cd divyadental_ui_seo
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (must pass before every push) |
| `npm run start` | Serve the production build locally |

## Project structure

```
app/                 Pages (App Router), metadata, sitemap.js, robots.js, manifest.js, icons
  services/[slug]/   Data-driven treatment pages
  utils/             config.js (clinic facts, SITE_URL), seo.js, schema.js
components/          Header, footer, home, services and team components
data/                services.js (treatments), team.js, faqs.js
public/              Images, llms.txt
audits/  seo/        Website audit and SEO documents (PDF + Markdown)
tools/md2pdf.py      Builds the branded PDF documents
netlify.toml         Build command and security headers
```

## Documents

- `DOCUMENTS.md`: index of the client documents (audit, keyword library, SEO growth plan)
- `CLAUDE.md`: rules to follow when changing the site
- `DESIGN.md`: design system
- `HANDOFF.md`: work log, decisions and next steps
