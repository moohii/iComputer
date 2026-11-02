# Project overview

## Purpose

iComputer Urban Tech DZ is a static, multilingual website describing computer support, maintenance, and office technology services in Algiers, Algeria. It also provides a searchable knowledge section and browser-based enquiry flows.

## Pages

- `index.html` — homepage and business overview.
- `services.html` — service directory.
- `services/` — individual service pages, office-sector pages, and the French-language student-document page.
- `booking.html` — general service enquiry.
- `knowledge.html` — practical guides with client-side search and category filters.
- `service-details.html` — a service-information utility page; marked `noindex`.
- `review.html` — review page.
- `thanks.html` — form confirmation; marked `noindex`.
- `quran.html` — additional Arabic content page.

## User-facing functionality

- Arabic, French, and English translations are available through shared language controls on pages wired to the translation scripts.
- The language switch updates page text in the browser; it does not navigate to a distinct URL for every language.
- Dark and light themes can be toggled and saved in browser storage.
- Navigation adapts for smaller screens.
- The knowledge section filters articles by query and category.
- Enquiry forms prepare a WhatsApp message in the browser. The message is sent only after the visitor chooses to continue in WhatsApp.
- CSS is organized into shared styles and page-specific styles, with responsive rules in `css/responsive.css`.
- JavaScript is split across shared site behavior and page-specific modules in `js/`.

## Stack and runtime

The site uses static HTML, CSS, and vanilla JavaScript. It has no package manifest, framework, or build step. A local static server is sufficient for development; deployment is provided by Netlify.

The visual system is dark-first, with graphite surfaces and signal-blue accents. See `iComputer-design-system.md` for the project's design tokens and guidance.

## Brand assets

- `images/logo-mark.svg`, `images/logo.png`, and `images/logo1.png` — logo assets.
- `images/hero-bg.jpg`, `images/hero-poster.jpg`, `images/hero-motion.mp4`, and `images/hero-motion.gif` — hero media.
- `images/services/` — service illustrations.
- `images/github-social-preview.png` — 1280 × 640 repository social-preview artwork.

A captured website screenshot is not currently included. To add one, capture the live homepage at a 1440 × 900 desktop viewport and save it as `images/website-preview.png`.

The repository social-preview artwork is `images/github-social-preview.png` (1280 × 640). To use it as the GitHub card image, open the repository's **Settings → General → Social preview**, upload the PNG, and save.

## GitHub repository About settings

The current public repository metadata has no description, homepage, or topics. Suggested values:

- **Description:** `Official website of iComputer Urban Tech DZ — IT support, computer maintenance and office technology services in Algiers, Algeria.`
- **Website:** `https://icomputer.netlify.app/`
- **Topics:** `it-support`, `computer-maintenance`, `computer-repair`, `algiers`, `algeria`, `network-support`, `office-it-support`, `netlify`, `html-css-javascript`, `small-business`

To apply them, open [moohii/iComputer](https://github.com/moohii/iComputer), select the **About** gear next to the repository description, enter the description and website, add the topics, and select **Save changes**. These settings have not been changed as part of this documentation update.

## Deployment and source of truth

The GitHub repository is `moohii/iComputer`; `main` is the production branch. Netlify serves the production website at <https://icomputer.netlify.app/>. The supplied GitHub Pages URL is a separate destination and is not the production deployment workflow.

See [Deployment](DEPLOYMENT.md) for the publishing steps and [SEO guide](SEO_GUIDE.md) for crawler-facing files and page metadata.
