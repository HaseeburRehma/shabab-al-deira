# Shabab Al Deira — Interior Design Website

Animated marketing homepage for **Shabab Al Deira Furniture Trading LLC**
(curtains, blinds, carpets, upholstery, wallpapers, sheds & tents — Deira, Dubai).

Design language and layout are inspired by [texham.co.uk](https://texham.co.uk)
(fullscreen media hero with ghost/outlined heading, wavy section dividers,
floating WhatsApp + phone buttons), rebranded to the flyer's warm
copper / brown / cream palette.

## Tech stack

- **Vite** + **React 18**
- **Tailwind CSS v4** (`@tailwindcss/vite`) — brand tokens in `src/index.css` (`@theme`)
- **Framer Motion** — scroll reveals, parallax hero, animated counters, marquee

## Brand tokens

| Token | Value | Use |
|-------|-------|-----|
| `accent` | `#e0955a` | logo orange, CTAs, highlights |
| `copper` | `#b07a4b` | accent rules, eyebrows |
| `brown` | `#6e4e34` | body copy on light |
| `espresso` | `#4a3626` | dark sections, form card |
| `bark` | `#3a2a1d` | footer |
| `cream` / `sand` | `#faf5ef` / `#f0e6d9` | backgrounds |

Fonts: **Poppins** (display), **Lato** (body), **Cormorant Garamond** (script accent).

## Run

```bash
npm install
npm run dev      # http://localhost:5199
npm run build    # production build → dist/
```

## Sections (`src/components/`)

Navbar · Hero · Marquee · About · Services · Stats · Gallery · CTA · Contact · Footer · FloatingButtons

Content (services, gallery, stats, contact details) is centralized in `src/site.js`.
Replace the Unsplash image URLs there with the client's real project photos before launch.
