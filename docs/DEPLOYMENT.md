# Deployment

## Production setup

- Source repository: <https://github.com/moohii/iComputer>
- Production branch: `main`
- Hosting provider: Netlify
- Production URL: <https://icomputer.netlify.app/>
- Netlify configuration file: `_redirects`

Netlify is connected to the GitHub repository and automatically builds production deployments from `main`. This is a static site: there is no build command or dependency installation step.

## Publish a change

1. Make and review changes locally on `main`.
2. Run the relevant checks and inspect `git diff`.
3. Stage and commit only the intended files.
4. Push to `origin main`:

   ```sh
   git push origin main
   ```

5. In the Netlify project dashboard, confirm that a production deployment for the new commit completes successfully.
6. Check the live page and, for SEO-related edits, `/robots.txt` and `/sitemap.xml`.

Do not use a manual folder upload as a substitute for the Git-based production workflow. Do not force-push.

## Local preview

Run a static server from the repository root:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with `Ctrl+C`.

## GitHub Pages

<https://moohii.github.io/iComputer/> is a separate URL. The production workflow documented here is GitHub `main` to Netlify; a GitHub Pages response does not confirm the status or configuration of Netlify production.

## Netlify redirects

`_redirects` currently maps `/services/small-business.html` to `/services/office-support.html` with a permanent redirect. Preserve this mapping unless the old URL is intentionally retired or replaced.
