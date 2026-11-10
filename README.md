# AccessByteSolutions — Premium Violet Frontend (2026)

## Quick start

Extract the ZIP, enter `AccessByteSolutions_Frontend` and open `index.html` in Chrome, Edge or Safari. The site supports local file previews using hash-based navigation. For live use, upload the entire folder contents to static hosting; the `/brochure`, `/portfolio`, `/capability-deck`, `/certifications` and other route folders contain direct-load entrypoints.

## GitHub Pages deployment

The site is published at `https://sachinpalsurgical-droid.github.io/accessbytesolution/` from the repository root on `main`. Keep **Pages → Build and deployment → Source** set to **Deploy from a branch**, with branch `main` and folder `/ (root)`. The project-path router keeps internal links, direct page loads and refreshes inside `/accessbytesolution/`.

## Navigation

Home | About Us | Services | Brochure | Portfolio | Industries | Capability Deck | Certifications | FAQs | Contact. Additional services, tools, standards, resources and process pages remain available through links and the footer. On narrower screens, use the hamburger navigation.

## Content and sections

- 20 industries with individual routes, 4-column layout and category filter buttons
- 9 Why Choose Us cards and 3 quality assurances
- Dedicated healthcare document section (SBC, EOC, directories, formularies, drug tiers)
- 4 capability cards for healthcare, high-volume document handling, multilingual support and standards review
- JAWS, NVDA, Adobe Acrobat and PAC validation-tool education cards
- Interactive homepage, hover effects, mobile responsiveness, before/after showcase
- A **company brochure** (`assets/AccessByteSolutions_Brochure_2026.pdf`)
- A **capability deck** (`assets/AccessByteSolutions_Capability_Deck_2026.pdf`)
- Portfolio illustrations, FAQ, contact and consultation pages
- WhatsApp contact: +91 9773518152, `https://wa.me/919773518152`

## How to edit

- `brand-upgrade.css`: industry cards, capability sections, navigation and footer visual styling.
- `brand-upgrade.js`: 20 industry entries, Why Choose Us copy, healthcare types, new route renderers.
- `experience.css` and `experience.js`: original premium violet experience layer.
- `style.css`, `app.js`, `data.js`, `extras.js`: existing foundation and service data.
- `config.js`: real business contact email and phone/WhatsApp settings.
- HTML entrypages in all page folders ensure direct URL access on static hosting.
- Regenerate the brochure/capability PDFs by editing or recreating `assets/*.pdf` (currently PDF files, not dynamically generated).

## Frontend-only limitations

There is no server or database. A PDF file selection in the contact form is not uploaded; enquiries are prepared for WhatsApp or local download. Contact and Google Maps links must be configured with verified business details. See `CONTENT_APPROVAL.md` for information not verified and therefore excluded from business claims.

## Test coverage

Syntax/static route checks were run. A browser-based in-memory rendering test verified the home page, 20 industries, filters, brochure, capability deck, certifications, portfolio and contact. Running the real site on a live server is still recommended for final cross-browser and accessibility QA.

## V4 Creative Direction — 28 October 2026

The redesigned frontend keeps the original Technova Midnight Violet foundation and the previously delivered AccessByteSolutions pages. The new `design-v4.css` and `design-v4.js` layer introduces:

- A new homepage with a premium document-workspace hero, clear brand story, and dual contact CTAs.
- Interactive services organized into Documents, Digital Experiences and Partnerships (clickable and keyboard-operable tabs).
- Eight featured sector cards, connecting to a complete 20-industry catalogue.
- An editorial process section, six quality principles, accessible FAQ accordions, and an illustrative before/after document demonstration.
- A less crowded navigation header with Services and Explore menus, reworked typography, purposeful hover effects, scroll progress, and back-to-top control.
- Improved desktop/tablet/mobile behavior, respect for reduced-motion preferences, and visible keyboard focus.
- A live color-contrast checker and an accessible website launch checklist, both linked from the homepage and available as direct-load pages.
- Two additional practical guides for keyboard-only testing and accessible form design, available in the searchable resource library and as direct-load pages.
- Corrected direct-load entry pages for the 20 current sector URLs, so industry cards do not point to unimplemented routes.

### How to preview

Open `index.html` with a browser for a local hash-routed preview or serve this folder as a static site. A separate `AccessByteSolutions_Single_File_Preview.html` is also provided outside the ZIP for browser viewing without extracting the package.

### How to customize V4

Edit `design-v4.css` for the layout, colors and effects. Edit `design-v4.js` for homepage copy, category tabs, featured services/industries and the example comparison. The legacy files remain editable for other pages. Navigation/header markup is present in every entry-point HTML file, so make consistent changes across those files before deploying. The brand mark is `assets/brand-icon.svg`.

### Real production limitations

This is a **frontend**, not a live processing service. A conceptual PDF-inspector illustration, the interactive comparison, quality claims and portfolio examples are demonstrations, not automatic file checking or documented audits. The website **does not send files to a server**. Quote requests prepare a message for the visitor to send in WhatsApp. Do not present standards coverage as third-party certification. Confirm company location, email and real project metrics before adding them. For a public launch, perform accessibility audits on the deployed site and configure analytics/security headers separately.
