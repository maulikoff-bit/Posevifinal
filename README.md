# Janhit Watch — accountability blog (starter)

A fast, SEO-friendly blog for documenting **sourced, public-record-based**
reports on Indian politicians and public figures. Built with [Astro](https://astro.build).

The site is designed so that *legal safety is built into the workflow*: every
report must declare a legal status (allegation vs. conviction etc.) and must
link at least one verifiable source, or the site refuses to build.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer) installed.

```bash
npm install      # one time, downloads the tools
npm run dev      # starts a local preview at http://localhost:4321
```

Open the link in your browser. Edits show up instantly.

To make the final files for publishing:

```bash
npm run build    # output goes into the dist/ folder
```

## 2. Write a new report

1. Go to the `src/content/posts/` folder.
2. Copy `example-report-template.md` and rename it, e.g. `2026-mla-land-case.md`.
   The file name becomes the web address.
3. Edit the top section (between the `---` lines). **Every field matters:**

   | Field | What to put |
   |-------|-------------|
   | `title` | Headline of the report |
   | `description` | 1–2 sentence summary (also used by Google) |
   | `pubDate` | Date you publish, e.g. `2026-05-21` |
   | `subject` | The person the report is about |
   | `party` | Their party (optional) |
   | `status` | One of: Allegation, Complaint Filed, Under Investigation, Charged, On Trial, Convicted, Acquitted, Cleared, Closed |
   | `tags` | Topic keywords |
   | `sources` | **Required** — at least one. title + url for each |

4. Write the article below the second `---` using normal text. See the sample
   for safe phrasing.

## 3. Customise your brand

Open `src/consts.ts` and change:
- Site **name**, **tagline**, **description**
- Your real **domain** (also update it in `astro.config.mjs` and `public/robots.txt`)
- **Support links** (Buy Me a Coffee / Patreon / UPI) — buttons appear automatically when filled in
- **AdSense** publisher id — leave blank until approved; ads stay hidden

## 4. Put it online (free)

The easiest path for a beginner:

1. Push this code to a GitHub repository (already set up for you).
2. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com),
   sign in with GitHub, and click "Import / New Project".
3. Select this repository. It auto-detects Astro. Click Deploy.
4. You get a free live URL in ~1 minute. Connect your own domain later in settings.

## 5. Earning money (roadmap)

1. **First, get traffic.** Publish consistently, target searches people
   actually make (names + "case"/"corruption"/"verdict"). SEO basics are
   already wired in (sitemap, RSS, meta tags, structured data).
2. **Reader support now:** add your Buy Me a Coffee / Patreon / UPI in
   `src/consts.ts` — works from day one.
3. **Display ads later:** apply to Google AdSense once you have real content
   and steady traffic. Paste your publisher id into `src/consts.ts` and ads
   turn on automatically.

## 6. Stay safe (read this)

- Never state someone is guilty of a crime unless a court has **convicted**
  them. Use the `status` field honestly.
- Link a real source for every claim. No source = don't publish it as fact.
- Keep the **Disclaimer**, **About**, **Methodology** and **Contact** pages
  accurate — they protect you and are also required for AdSense approval.
- Offer corrections / right of reply, and act on them quickly.
- India has criminal defamation law. When in doubt about a serious claim,
  get a lawyer to review before publishing.
