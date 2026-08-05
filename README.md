# Grivini Website — NTN Lab v6.0.1

Complete static website package for Vercel.

## Public routes
- `/` — Grivini homepage
- `/labs/` — NTN Lab product overview and release notes
- `/labs/app/` — current NTN Lab v6.0.1 application
- `/docs/` — operating guide
- `/about/` — product and engineering approach
- `/contact/` — technical feedback guidance

## Release consistency
Every launch button points to `/labs/app/`, which contains the v6.0.1 straight UE–satellite LOS build.

## Deployment
Replace the repository contents with the contents of the `grivini-main` folder, commit to `main`, and allow Vercel to redeploy. Preserve the folder structure.

## Runtime
The public pages are static. The lab loads CesiumJS and online map content and therefore requires an internet connection.
