# Demo Links Fix for Vercel Deployment

## Issue
Demo links at `/demos/forklift`, `/demos/drone`, and `/demos/robotic-arm` were returning 404 errors on Vercel (but working locally).

## Root Cause
The iframe sources in the demo pages were pointing to `.html` files (e.g., `/forklift_demo.html`), which work locally but fail on Vercel deployment due to URL routing differences.

## Solution
1. **Update iframe sources** to use clean URLs (without `.html` extension):
   - `/forklift_demo.html` → `/forklift_demo`
   - `/drone_demo.html` → `/drone_demo`
   - `/robotic_arm_demo.html` → `/robotic_arm_demo`

2. **Add Vercel rewrites** in `vercel.json`:
   ```json
   "rewrites": [
     { "source": "/forklift_demo", "destination": "/forklift_demo.html" },
     { "source": "/drone_demo", "destination": "/drone_demo.html" },
     { "source": "/robotic_arm_demo", "destination": "/robotic_arm_demo.html" }
   ]
   ```

## Files Modified
- `src/app/demos/forklift/page.tsx` - Updated iframe src
- `src/app/demos/drone/page.tsx` - Updated iframe src
- `src/app/demos/robotic-arm/page.tsx` - Updated iframe src
- `vercel.json` - Added rewrites configuration

## Important Notes
- The actual HTML files (`forklift_demo.html`, `drone_demo.html`, `robotic_arm_demo.html`) remain in the `public/` directory
- The build script copies these files to `out/` directory: `npm run copy-demos`
- Vercel rewrites handle the URL mapping from clean URLs to `.html` files
- **Remember this pattern if adding new demo pages in the future!**

## Commit Reference
Commit: 889c802 - "Fix demo iframe 404 errors on Vercel deployment"
Date: 2026-01-29
