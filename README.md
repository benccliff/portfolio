# Benjamin Cliff — Portfolio

Personal portfolio site built with Vite + React.

## Development

```bash
make dev
```

Opens `http://localhost:5173` in the browser automatically.

## Adding a blog post

1. Create `src/content/blog/my-post-title.md`
2. Add frontmatter at the top:

```markdown
---
title: "My Post Title"
date: "2026-02-20"
description: "A short description shown on the listing page."
---

Content goes here...
```

3. It appears automatically on `/blog` — no registration needed.

## Replacing the profile photo

Drop your photo at `public/profile.svg` (or update the `src` in `src/pages/Home.jsx` to point to a `.jpg`).

## Deployment (Vercel)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Vercel auto-detects Vite — build command `npm run build`, output dir `dist`
4. Click Deploy

Every subsequent push to `master` redeploys automatically.

**Custom domain:** Vercel dashboard → Project → Settings → Domains → add domain, then update DNS with your registrar to point to Vercel's nameservers.
