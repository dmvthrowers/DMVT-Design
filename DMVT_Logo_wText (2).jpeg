# YoYo Map — UI Kit

## Overview
High-fidelity interactive prototype of the **map.dmvthrowers.club** Next.js web app — a privacy-first community map for yo-yo players worldwide.

## Design System
- **Colors:** `--red: #B80000` (canonical), `--navy: #1a2744`, `--cream: #f5f0e8`
- **Type:** Playfair Display (display) + DM Sans (body/UI)
- **Corner radius:** 0 everywhere — all square corners (uses `border-radius: 0` explicitly)
- **Tailwind:** Configured with custom brand tokens; see `tailwind.config.js`

## Screens
| Screen | Route | Description |
|---|---|---|
| Home | `/` | Hero, trust row, how-it-works, privacy block, CTA |
| Map | `/map` | Interactive Leaflet map with info panel overlay |
| Players | `/players` | Browse players by country |
| Submit | `/submit` | Multi-step form to add yourself/shop/club |
| Profile | `/profile` | Manage your listing via magic link |

## Key Components (from codebase)
- `Navigation.tsx` — Topbar (red, desktop only) + sticky cream nav + mobile hamburger
- `MapInfoPanel.tsx` — Collapsible overlay panel on the map
- `EntryList.tsx` — Player/shop/club listing grid
- Submit form — Multi-step with type selector (person/shop/club), location autocomplete, socials, consent

## Privacy Architecture
- Players get ~10mi location blur (random direction)
- Shops/clubs can show exact address (opt-in)
- Email never shown publicly
- 13+ with parental consent
- Opt-in only; deletable anytime

## Source
- Codebase: `yoyomap/yoyomap/yoyo-player-map/yoyomap/`
- Stack: Next.js 14, Tailwind CSS, Leaflet, Supabase
- Live: https://map.dmvthrowers.club
