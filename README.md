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

## 2a. The easiest way to publish (3 options)

A "post" is just a Markdown file in `src/content/`. There are three ways to
create one — pick what suits you:

**Option A — Visual editor at `/admin` (recommended, WordPress-like).**
You log in and fill a form: headline, subject, a Status dropdown, a repeatable
Sources list, and a rich-text body. It writes the file for you, correctly, so
you can't break the build. One-time login setup is described in
"Visual editor (/admin)" below.

**Option B — GitHub website (zero setup, works today).**
Go to your repo on github.com → open `src/content/posts/` → "Add file →
Create new file" → write the post (copy the header from an existing file) →
"Commit". The site rebuilds and goes live automatically. You type the header
fields by hand, so be careful with formatting.

**Option C — On your computer.**
Edit files in `src/content/`, then `git add`, `git commit`, `git push`. Best
once you're comfortable with the tools.

In every case: **save/commit → the site rebuilds → live in about a minute.**

## Visual editor (/admin)

The form-based editor (Decap CMS) lives at `yourdomain.com/admin`. It needs a
one-time login connection because it writes to your GitHub repo on your behalf.

1. Open `public/admin/config.yml` and set `branch:` to the branch your site
   deploys from (`main` after you merge this work).
2. Connect login (choose one):
   - **Simplest:** deploy a small GitHub OAuth helper (free). Search
     "Decap CMS GitHub OAuth provider Vercel" for a one-click template, deploy
     it, then put its URL into `base_url` in `config.yml`.
   - **Or** host on Netlify and enable Identity + Git Gateway, then delete the
     `base_url` and `auth_endpoint` lines.
3. Visit `/admin`, log in with GitHub, and start writing.

Until you finish step 2, use Option B above to publish — no setup needed.

## 2b. Write a guide (safe, evergreen, great for traffic)

"Guides" are non-accusatory explainers (e.g. *"How to file an RTI"*). They pull
in steady Google traffic and carry almost no legal risk — perfect for getting
started and for AdSense approval. Four are already included.

- Add a Markdown file in `src/content/guides/`.
- Required fields: `title`, `description`, `pubDate`, `tags`. `sources` are
  optional here.
- Guides appear on `/guides` and on the homepage automatically.

## 2c. Search, topics & newsletter

- **Search** (`/search`) is powered by Pagefind and built automatically during
  `npm run build`. It works on the live site / `npm run preview`, not in `dev`.
- **Topics** (`/topics`) pages are generated from the `tags` you add to posts
  and guides.
- **Newsletter:** open `src/consts.ts`, set `NEWSLETTER.enabled = true` and
  paste your provider's form URL into `NEWSLETTER.action`. Free options that
  work out of the box: Buttondown, MailerLite, ConvertKit, or Formspree. The
  signup box then appears at the bottom of every page.

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
