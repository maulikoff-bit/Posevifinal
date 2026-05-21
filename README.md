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

## Visual editor (/admin) — the login is already built in

The form-based editor (Decap CMS) lives at `yourdomain.com/admin`. The login
backend is **already included** in this project (`/api/auth` and
`/api/callback`), so you do **not** need to deploy any extra service. You only
have to create one free GitHub "login app" and paste two values into Vercel.
Full click-by-click steps are in **"GET ONLINE: the 6-step checklist"** below.

Once that's done: go to `/admin`, click "Login with GitHub", and write. Hitting
**Publish** commits the post and your site updates within about a minute.

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

## 4. GET ONLINE: the 6-step checklist (do this once)

Follow these in order. After this, you just log in at `/admin` and write.

**Step 1 — Get the code onto your `main` branch.**
On GitHub, merge this branch into `main` (GitHub shows a green
"Compare & pull request" button → "Merge"). Your site will deploy from `main`.

**Step 2 — Deploy on Vercel (free).**
Go to [vercel.com](https://vercel.com) → sign in with GitHub → "Add New Project"
→ import this repository → click **Deploy**. Astro is auto-detected. In ~1
minute you'll get a live URL like `https://posevifinal.vercel.app`. Copy it.

**Step 3 — Create a GitHub "login app".**
Go to GitHub → Settings → Developer settings → **OAuth Apps** → "New OAuth App".
Fill in:
- Application name: `Janhit Watch Admin`
- Homepage URL: your Vercel URL from Step 2
- **Authorization callback URL:** your Vercel URL + `/api/callback`
  (e.g. `https://posevifinal.vercel.app/api/callback`)

Click Register. Copy the **Client ID**. Click "Generate a new client secret"
and copy the **secret** too.

**Step 4 — Give Vercel those two values.**
In Vercel → your project → Settings → **Environment Variables**, add:
- `GITHUB_CLIENT_ID` = the Client ID from Step 3
- `GITHUB_CLIENT_SECRET` = the secret from Step 3

Then redeploy (Vercel → Deployments → "Redeploy") so the values take effect.

**Step 5 — (If you used a custom domain)** repeat the callback URL in Step 3
using your real domain.

**Step 6 — Log in and write.**
Visit `yourdomain.com/admin`, click "Login with GitHub", approve once, and
start posting. That's it — no files to edit.

> Don't want to set up login yet? You can publish immediately using the GitHub
> website method (Option B in section 2a) while you do the steps above.

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
