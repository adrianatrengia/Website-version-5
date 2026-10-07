# Shine Bright Tutoring MTL — Static Production Website

This is the lightweight production repository for [shinebrighttutoringmtl.ca](https://shinebrighttutoringmtl.ca).

## Why this version is different

- Plain static HTML, CSS, and minimal JavaScript
- No `app` folder
- No React, Next.js, Vinext, Vite, package manager, dependencies, or framework build
- Every English and French page is a real, separate HTML file
- No environment variables or server functions
- All required website images are stored locally
- Booking, social media, LinkedIn, and Amazon links intentionally open the appropriate external websites
- Vercel serves the committed files directly

## Website structure

- `index.html` — English homepage
- `fr/index.html` — French homepage
- `services/.../index.html` — individual English service pages
- `fr/services/.../index.html` — individual French service pages
- `assets/site.css` — shared design and responsive styling
- `assets/site.js` — mobile menu, current year, and contact-email helper
- `assets/images/` — optimized local logo and founder photos
- `sitemap.xml` and `robots.txt` — search-engine discovery
- `vercel.json` — caching, clean URLs, and safe response headers

The `scripts/` directory contains zero-dependency maintenance and validation tools. Vercel does not need to run them because the final HTML files are already committed.

## Vercel settings

Import the GitHub repository into Vercel and use:

- **Framework Preset:** Other
- **Root Directory:** repository root (`.`)
- **Install Command:** leave blank
- **Build Command:** leave blank
- **Output Directory:** leave blank
- **Environment Variables:** none

Do not select Next.js and do not enter `npm install` or a build command.

## Publish through GitHub

Do not upload folders individually in GitHub’s browser uploader. Push the complete Git repository so all nested paths remain intact:

```bash
git init
git add .
git commit -m "Launch Shine Bright Tutoring MTL website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

GitHub accepts this repository normally through Git. It contains no generated dependencies or oversized source assets.

## Local preview

Any static web server can preview the site. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Validation

If Node.js is installed, run:

```bash
node scripts/validate.mjs
```

This checks metadata, English/French alternate pages, internal links, images, stylesheets, scripts, local paths, and required deployment files.

## Updating content

The public HTML pages are already complete. `scripts/generate.mjs` is the zero-dependency source generator used to keep matching English and French page structures. After editing its approved content, run it once and commit the updated HTML files.

## Porkbun domain

Deploy successfully on Vercel first. Then add both `shinebrighttutoringmtl.ca` and `www.shinebrighttutoringmtl.ca` in the Vercel project’s Domains settings. Vercel will display the exact DNS records to enter at Porkbun. Use those current values rather than guessing DNS records in advance.
