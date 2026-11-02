# SEO guide

This guide describes the repository's current SEO setup. Keep page metadata, canonical URLs, crawler directives, and the sitemap consistent when adding or changing pages.

## Page metadata

Indexable pages should have a unique `<title>`, a useful meta description, and one canonical URL on the production host:

```html
<link rel="canonical" href="https://icomputer.netlify.app/example.html">
```

The homepage canonical is the root URL, `https://icomputer.netlify.app/`. Keep Open Graph URLs aligned with the corresponding canonical.

Use structured data only when it accurately describes the visible page and business. Existing examples include organization, collection-page, and service data.

## Robots and sitemap

- `robots.txt` allows crawling, excludes `/thanks.html`, and advertises `https://icomputer.netlify.app/sitemap.xml`.
- `sitemap.xml` lists intended public pages on the Netlify production host.
- Do not add confirmation, utility, or otherwise `noindex` pages to the sitemap.
- When a public page is added or removed, review the sitemap and its internal links.

## Language URLs

The shared language controls change text in JavaScript while retaining the same URL. This is not a set of independently addressable localized pages, so the site does not declare `hreflang` alternatives for those translations.

The student-document service has a dedicated French page at `/services/memoires-etudiants.html`; it does not currently have an equivalent standalone Arabic or English URL. Do not invent alternate-language URLs or reciprocal `hreflang` links. If dedicated translated page URLs are introduced, add appropriate self-canonicals and reciprocal `hreflang` annotations only after the pages exist.

## Adding a page checklist

1. Set the correct document `lang` and text direction.
2. Add a descriptive, page-specific title and meta description.
3. Add exactly one canonical URL using the production host.
4. Align Open Graph metadata where present.
5. Add accurate structured data only if it represents the page.
6. Decide whether the page should be indexable; add a single robots directive if needed.
7. Add indexable pages to `sitemap.xml`; exclude `noindex` pages.
8. Link to the page from relevant site navigation or content.
9. Check local asset and navigation paths.

## Validate

From the repository root, inspect the crawler files and search page metadata:

```sh
cat robots.txt
cat sitemap.xml
```

On Windows PowerShell, use `Get-Content robots.txt` and `Get-Content sitemap.xml`. Before publishing, verify that the live sitemap and robots file return successfully and that each canonical resolves to the intended production page.
