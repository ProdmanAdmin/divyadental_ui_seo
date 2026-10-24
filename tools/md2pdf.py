"""Build a branded PDF (A4 landscape, Prodman Nexus header/footer) from a Markdown report.

Usage:
  pip install --target /tmp/md2pdf-lib markdown        # once per machine (or plain `pip install markdown`)
  PYTHONPATH=/tmp/md2pdf-lib python3 tools/md2pdf.py <input.md> <output.pdf> "<header title>"

Needs Google Chrome (headless) for printing. Used for audits/ and seo/ documents.
"""
import base64, os, re, subprocess, sys, tempfile

import markdown

CHROME = os.environ.get("CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
HERE = os.path.dirname(os.path.abspath(__file__))

CSS = """
@page{size:A4 landscape;margin:24mm 12mm 16mm 12mm;
 @top-left{content:url("data:image/jpeg;base64,LOGO") "  HEADER";font:bold 11pt Helvetica,Arial,sans-serif;color:#9d174d;border-bottom:2.5px solid #be185d;vertical-align:middle;width:70%;padding-bottom:3px}
 @top-right{content:"Prepared by Prodman Nexus Solutions";font:8.5pt Helvetica,Arial,sans-serif;color:#6b7280;border-bottom:2.5px solid #be185d;vertical-align:middle;text-align:right;padding-bottom:3px}
 @bottom-right{content:"Page " counter(page) " of " counter(pages);font:8pt Helvetica,Arial,sans-serif;color:#6b7280}
 @bottom-left{content:"Confidential — prepared for Dr Divya's Phoenix Dental Care";font:8pt Helvetica,Arial,sans-serif;color:#6b7280}}
*{box-sizing:border-box}
body{font:9.2pt/1.45 -apple-system,Helvetica,Arial,sans-serif;color:#1f2937;margin:0}
h1{font-size:20pt;color:#9d174d;margin:0 0 4px}
h2{font-size:14pt;color:#9d174d;border-bottom:1px solid #f9a8d4;padding-bottom:3px;margin:18px 0 8px;page-break-after:avoid}
h2#appendix{page-break-before:always}
h3{font-size:11pt;color:#111827;margin:14px 0 6px;page-break-after:avoid;background:#fdf2f8;padding:4px 8px;border-left:4px solid #be185d}
h4{font-size:10pt;color:#9d174d;margin:12px 0 6px;page-break-after:avoid}
p,li{margin:4px 0}ul{padding-left:18px}a{color:#9d174d}
table{border-collapse:collapse;width:100%;margin:6px 0 10px;font-size:7.8pt}
th{background:#9d174d;color:#fff;text-align:left;padding:4px 5px;font-weight:600}
td{border:1px solid #e5e7eb;padding:4px 5px;vertical-align:top;word-wrap:break-word}
tr{page-break-inside:avoid}tbody tr:nth-child(even) td{background:#fafafa}
thead{display:table-header-group}
td.c{text-align:center;white-space:nowrap}
.b{display:inline-block;padding:1px 6px;border-radius:9px;font-weight:700;font-size:7.4pt;color:#fff}
.b-critical,.b-p1{background:#b91c1c}.b-high,.b-p2{background:#ea580c}.b-medium{background:#ca8a04}.b-low,.b-p3{background:#2563eb}.b-new{background:#6b7280}
blockquote{margin:8px 0;padding:6px 10px;background:#f3f4f6;border-left:4px solid #9ca3af;color:#374151}
code{font:8pt Menlo,monospace;background:#f3f4f6;padding:0 3px;border-radius:3px}
hr{border:0;border-top:1px solid #e5e7eb;margin:12px 0}
img{max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:4px}
td img{display:block;max-height:100mm;width:auto;margin:0 auto}
.newpage{page-break-before:always}
"""


def badge(match):
    word = re.sub(r"</?strong>", "", match.group(1))
    return f'<td class="c"><span class="b b-{word.lower()}">{word}</span></td>'


def main(md_path, pdf_path, header):
    html = markdown.markdown(open(md_path).read(), extensions=["tables", "sane_lists", "attr_list"])
    html = re.sub(r"<td>((?:<strong>)?(?:Critical|High|Medium|Low|New|P1|P2|P3)(?:</strong>)?)</td>", badge, html)
    logo = base64.b64encode(open(os.path.join(HERE, "logo-40.jpeg"), "rb").read()).decode()
    css = CSS.replace("LOGO", logo).replace("HEADER", header.replace('"', '\\"'))
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(f'<!doctype html><html><head><meta charset="utf-8"><title>{header}</title><style>{css}</style></head><body>{html}</body></html>')
        tmp = f.name
    subprocess.run([CHROME, "--headless=new", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
                    "--generate-pdf-document-outline", f"--print-to-pdf={os.path.abspath(pdf_path)}", f"file://{tmp}"],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.remove(tmp)
    print("wrote", pdf_path)


if __name__ == "__main__":
    main(*sys.argv[1:4])
