# Patna Wedding Studio Review

A simple React + Vite static website starter for an independent customer-experience/review website.

## Run locally

Requirements:
- Node.js 20+

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Azure Static Web Apps

This project is suitable for Azure Static Web Apps.

Typical deployment flow:
1. Push this project to GitHub.
2. Create an Azure Static Web App.
3. Connect the GitHub repository.
4. Set the app location to `/`.
5. Set the output location to `dist`.
6. Build command: `npm run build`.
7. After deployment, add `patnaweddingstudio-review.com` as a custom domain in Azure Static Web Apps.
8. Configure the DNS records requested by Azure.

## Important content note

Before publishing allegations or personal communications:
- retain original evidence;
- redact unnecessary personal information;
- distinguish facts from opinions;
- avoid impersonating the business;
- provide a right-of-response section;
- have the final public wording reviewed by your advocate.
