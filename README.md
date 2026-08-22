# DWRICK

A simple, product-focused DWRICK storefront for GitHub Pages.

## Deploy to GitHub Pages

This project is a static site and needs no build step.

1. Push the project files to the `main` branch of `robogolan/DWRICK`.
2. Open **Settings > Pages** in the repository.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to `main` or run **Deploy DWRICK to GitHub Pages** from the Actions tab.

The site will be available at:

`https://robogolan.github.io/DWRICK/`

The workflow lives in `.github/workflows/deploy.yml` and publishes the repository root automatically after each push to `main`.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static web server.

The contact form opens the visitor's email application and sends to `hello@dwrick.com`. Replace that address in `index.html` and `script.js` with the brand's real support address before launch.
