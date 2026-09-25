# CATCH — Glitch Launcher

Neon glitch Android launcher concept. Black background, RGB-split clock, and the **CATCH** mark made from six glowing shapes.

**Live preview:** [glitchplays1.github.io/catch-glitch-launcher](https://glitchplays1.github.io/catch-glitch-launcher/)

Open that page on your phone. Swipe the lock screen up to reach the home grid. You can also add it to your home screen from the browser (it is a small web app).

## What is in this repo

| File | What it is |
| --- | --- |
| `index.html` | Lock screen + home screen demo |
| `app.js` | Live clock, swipe-to-unlock, tap feedback |
| `manifest.webmanifest` | Install-as-app settings |
| `sw.js` | Offline cache for the demo |
| `logo.svg` | CATCH mark (cyan C, green triangle, yellow X, pink T, white C, purple H) |

## The look

- **Lock screen** — giant glitch clock, date, vertical CATCH stack, lock icon, “Swipe up to unlock”
- **Home screen** — same clock over faded CATCH letters, 4×3 icon grid, CATCH dock button in the middle
- **Colors** — cyan `#00E8FF`, lime `#7CFF2B`, yellow `#FFE14A`, pink `#FF2D9A`, white `#F4F4F4`, purple `#9B4DFF`

This is a design demo, not a real Android system launcher. A full device launcher needs to be an Android app that replaces the home screen. The web version is here so you can share the look right away.

## Turn on GitHub Pages

1. Open the repo **Settings**
2. Click **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / folder `/ (root)`
5. Save

After a minute the preview URL above should work.

## Next steps (if you want a real Android launcher)

- Build it with Kotlin + Jetpack Compose as a home-screen replacement (`CATEGORY_HOME`)
- Or theme an existing open-source launcher (Lawnchair, Niagara-style) with this icon pack and wallpaper
- Export the SVG mark into adaptive icons for the dock button

Made for [Glitchplays1](https://github.com/Glitchplays1).
