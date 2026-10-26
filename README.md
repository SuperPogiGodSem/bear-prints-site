# Bear Prints website

Responsive static website for Bear’s Personalized Printed Packaging. No dependencies or build step are required.

## Preview locally

Open `index.html` directly, or serve this folder with any static file server. The `404.html` page is included for the host’s not-found route.

## Before publishing

1. Replace `https://bearprints.example` in `index.html`, `robots.txt`, and `sitemap.xml` with the production domain.
3. Connect the quote form in `script.js` to an approved form endpoint. Until then it validates and previews the details locally and states that nothing is sent.
4. Confirm actual product formats and photography before making product availability claims.
5. Configure `404.html` as the site's not-found page on the static host.

## Files

- `index.html`: home page, product catalog, benefits, ordering steps, quote demo, contact, and footer.
- `styles.css`: palette, responsive layouts, illustration motion, and reduced-motion support.
- `script.js`: mobile menu and quote form validation/demo feedback.
- `404.html`: designed not-found page.
- `assets/bear-prints-logo.jpg`: user-provided Bear Prints logo.
- `assets/*-example.jpg`: customer-supplied paper cup and printed-paper examples used in the product catalog.
- `DESIGN.md`: concept, visual system, layout, and assumptions.
