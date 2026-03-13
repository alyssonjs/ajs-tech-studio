# AJS Tech Studio

Website and portfolio for **AJS Tech Studio** — software consulting and product development. Built with React, Vite, TypeScript and Tailwind CSS.

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & preview

```bash
# Production build
pnpm run build

# Preview production build locally
pnpm run preview
```

## Environment variables (optional)

Copy `.env.example` to `.env` and adjust if needed:

- **VITE_GITHUB_URL** – GitHub profile URL (default: https://github.com)
- **VITE_LINKEDIN_URL** – LinkedIn profile URL (default: https://linkedin.com)
- **VITE_CV_URL** – Resume/CV PDF or page URL (default: #)
- **VITE_SITE_URL** – Canonical site URL (used for sitemap and Formspree redirect; default: https://ajstechstudio.com)
- **VITE_FORMSPREE_FORM_ID** – [Formspree](https://formspree.io) form ID to send contact form submissions to email. If set, the contact form will POST to Formspree and redirect back with a thank-you message.

Update `public/robots.txt` and `public/sitemap.xml` with your production domain when you deploy.

## Deploy (Vercel)

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Vercel will detect Vite and use `pnpm run build` and output directory `dist`.
3. Add environment variables in the Vercel dashboard if you use custom links or Formspree.
4. Optionally set your custom domain in Vercel and update `public/sitemap.xml` and `public/robots.txt` with that domain.

The project includes a `vercel.json` with rewrites so client-side routes work correctly (all routes serve `index.html`).
