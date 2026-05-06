# DMV Throwers Design System

## Overview

**DMV Throwers** is the Washington DC/Maryland/Virginia region's yo-yo and skill toy community club, founded in 2021. The club meets every 3rd Sunday at Arlington Central Library (1015 N Quincy St, Arlington VA 22201). All ages, all skill levels, always free.

### Products

| Product | URL | Stack | Path |
| --- | --- | --- | --- |
| **Club Website** | <https://dmvthrowers.club> | Vanilla HTML/CSS/JS | `dmvthrowers.github.io/` |
| **VSYC-26 Contest Sub-site** | <https://dmvthrowers.club/vsyc26.html> | Same (separate CSS) | `dmvthrowers.github.io/vsyc26-*.html` |
| **YoYo Map** | <https://map.dmvthrowers.club> | Next.js 14, Tailwind CSS, Leaflet, Supabase | `yoyomap/yoyomap/yoyo-player-map/yoyomap/` |

### Key pages (Club Website)

- `index.html` — homepage/hero, about section
- `events.html` — monthly meetup listings
- `gallery.html` — community photo gallery
- `team.html` — leadership team
- `resources.html` — yo-yo learning resources
- `faq.html`, `contact.html`, `about.html`
- `vsyc26.html` — Virginia State Yo-Yo Contest 2026 hub

### Key screens (YoYo Map app)

- `/` — home/landing with hero + how-it-works
- `/map` — interactive Leaflet map of players/shops/clubs
- `/players` — browse by country
- `/submit` — add yourself to the map
- `/profile` — manage your listing
- `/report` — abuse reporting

---

## Content Fundamentals

### Voice & Tone

- **Direct and welcoming** — community-first, never corporate.
- **All-caps for labels and nav** — e.g. "ABOUT", "EVENTS", "YO-YO & SKILL TOY CLUB"
- **Title Case for headings** — "More Than a Yo-Yo Club", "Find Your Local Crew"
- **Sentence case for body copy** — conversational, warm, approachable
- **Second person ("you/your")** — "Whether you've never touched a yo-yo or you're grinding competition routines, this is your crew."
- **Short, punchy sentences** — no fluff, no filler. "All ages, all levels, always free."
- **Regional pride is prominent** — DC/MD/VA, DMV, "The Mid-Atlantic's home for…"
- **No emoji** in main site copy (only ☕ for the donate button — a brand quirk)
- **Numbers/stats are celebrated** — "3rd Sunday every month", "Est. 2021", "Free — always, no exceptions"
- **Competition sub-site (VSYC-26) is more formal** — still warm but "official" (gold accents, sponsor tiers, rulebook language)
- **YoYo Map is privacy-focused** — "opt-in", "city-level only", "never exact address"

### Specific copy conventions

- Club name: always **DMV Throwers** (never "DMV Throwers Club" alone)
- Subtitle: **YO-YO & SKILL TOY CLUB** (all caps, ampersand)
- Contest: **VSYC-26** / **Virginia State Yo-Yo Contest**
- App: **YoYo Map** (camel-case, two words)
- Address: **Arlington Central Library · 1015 N Quincy St, Arlington VA 22201**
- Social: **@dmv_throwers** (Instagram/Twitter)
- Email: **<contact@dmvthrowers.club>**

---

## Visual Foundations

### Color System

Three sub-palettes that share a core:

#### Main Club Site

| Token | Hex | Usage |
| --- | --- | --- |
| `--red` | `#B80000` | Primary accent, CTAs, tags, dividers |
| `--red-dark` | `#7a0000` | Hover state |
| `--navy` | `#102040` | Primary surface, headings, dark sections |
| `--navy-deep` | `#08122a` | Deepest backgrounds |
| `--cream` | `#fffdfa` | Page background |
| `--cream-mid` | `#f7f3ec` | Alt section background |
| `--border` | `#b0a890` | Hairline borders, dividers |
| `--text-muted` | `#4a5a7a` | Secondary text |
| `--teal` | `#13C3A3` | Donate CTA only |

#### VSYC-26 Contest Sub-site (adds gold, darkens everything)

| Token | Hex | Usage |
| --- | --- | --- |
| `--gold` | `#C9A84C` | Primary accent (replaces red) |
| `--gold-light` | `#e8c97a` | Gold hover |
| `--red` | `#C8102E` | Secondary accent / danger |
| `--navy` | `#1a2744` | Surface |
| `--navy-deep` | `#0d1428` | Background |

#### YoYo Map (brighter red, warm cream)

| Token | Hex | Usage |
| --- | --- | --- |
| `--red` | `#B80000` | Primary accent (canonical — was #D42B2B in codebase, treat as bug) |
| `--navy` | `#1a2744` | Dark surfaces |
| `--cream` | `#f5f0e8` | Background |
| `--cherry-pink` | `#F9D0D4` | Subtle accent (VSYC spring theme) |

> **Canonical red is `#B80000`** across all products. The YoYo Map codebase previously used `#D42B2B` — treat that as a bug; use `#B80000`.

### Typography

- **Display:** Playfair Display (900/700 weights) — hero titles, section titles, brand lockup, stat numbers, card titles. Always in navy or white; never red (except VSYC-26 gold titles).
- **Body:** DM Sans (700/600/400) — all UI, nav, body copy, buttons, labels. Sharp, clean, modern.
- **Event sub-site:** Montserrat (800/700/600/400) — replaces DM Sans on VSYC-26 pages for a more formal feel.
- No other font families in use.
- **Font substitution note:** Playfair Display, DM Sans, and Montserrat are all loaded from Google Fonts. No local font files in the codebase. `fonts/` directory contains Google Fonts CSS imports only.

### Spacing & Layout

- Max content width: **1100px** on all pages
- Section padding: **80px vertical, 24px horizontal** (shrinks on mobile: 64px / 18px)
- Grid gaps: **16px–48px** (3rem = 48px for major two-col grids)
- Nav height: **64px** (sticky)
- Top bar height: **~36px** (red strip above nav)

### Border Radius

- **Zero border radius everywhere.** Sharp corners are a core brand motif — cards, buttons, tags, form inputs, all have `border-radius: 0`. This is intentional and consistent.

### Cards

- White background, 1px hairline border (`var(--border)`)
- **Top accent border** (3px red) for stat cards, division cards
- **Left accent border** (4px navy) for doc cards, team teasers, notes
- No drop shadows on cards (flat, border-only)
- Hover on interactive cards: `translateY(-2px)` (subtle lift, no shadow added)

### Shadows

- Minimal shadow use. Only appears on: map info panel (`shadow-lg`) and some nav. Cards are border-only, no shadows.

### Backgrounds

- **Dark sections:** navy (`#102040`) with dot pattern (`radial-gradient` of white dots, 28-32px grid, 6% opacity). Used for hero, footer, VSYC sections.
- **Light sections:** cream or white alternating.
- **No full-bleed photography** as backgrounds (photos are in gallery grid, not behind text).
- **DC skyline SVG** (`dc-skyline.svg`) used as decorative bottom-of-hero ornament, ~80px tall, 15-18% opacity.
- **VSYC-26:** uses marigold/cherry blossom hero photo (`vsyc-marigolds-hero.jpg`) for nature decoration on page heroes.

### Buttons

- **Square corners, uppercase, letter-spaced** — all buttons are rectangles, no pill shapes.
- Letter-spacing: ~0.095em on button text.
- Minimum tap target: 44px height.
- Primary: red fill (`btn-red`), white text
- Secondary: navy fill (`btn-navy`/`btn-secondary`)
- Outline variants: red outline, white outline
- VSYC-26: gold fill (`btn-gold`)
- Hover: fill darkens or swaps, `translateY(-1px)`
- Press: no extra state beyond hover

### Navigation

- Sticky cream nav, 64px height, 1px border-bottom
- All-caps nav links, 0.72rem, 0.11em letter-spacing, 600 weight
- Active state: 2px red border-bottom + red text color
- Brand lockup: Playfair Display 1.1rem 900wt + 0.6rem red sub-label
- Special CTA buttons (VSYC, Donate) are pill/box shaped within nav, break from link style

### Animations & Transitions

- **Very minimal.** Transitions on color/background only: `0.2s ease` for all hovers.
- Slight `translateY(-1px)` on button hover and `translateY(-2px)` on card hover.
- No entrance animations, no scroll reveals, no parallax.
- `prefers-reduced-motion` is properly respected — all transitions set to 0.01ms.

### Iconography

See **ICONOGRAPHY** section below.

### Imagery

- Community photos are warm, candid, people-focused (yo-yo meetup candids).
- Gallery images are natural light, community event shots.
- No stock photography; all real community photos.
- DC skyline silhouette (SVG) used as decorative element.
- VSYC-26: marigold/cherry blossom imagery for Virginia state contest feel.

---

## ICONOGRAPHY

### Approach

- **No icon font** in use on either product.
- **No SVG sprite sheet** — individual SVG inline or `<img>` where needed.
- **Lucide icons** (inline SVG) used in YoYo Map codebase for UI elements (chevrons, arrows, etc.). Stroke-weight 2–2.5, rounded joins.
- **Unicode/text arrows** (`→`, `✓`, `✕`) used as list bullets and arrow indicators throughout the main site — a deliberate stylistic choice, not a placeholder.
- Emoji: minimal — only `☕` on the donate button.
- No emoji used in body copy or headings.

### Logo Files (in `assets/logos/`)

| File | Description |
| --- | --- |
| `dmvt-logo.png` | Primary logo (glyph only, red, transparent bg) — used in nav/footer |
| `dmvt-logo-glyph.jpg` | Glyph on white background |
| `dmvt-logo-glyph-bw.png` | B&W glyph (for dark backgrounds via CSS filter) |
| `dmvt-logo-with-text.jpeg` | Full logo with "DMV THROWERS" text |
| `va-state-logo.png` / `.svg` | VA State Yo-Yo Competition logo (blue/pink/gold) |
| `vsyc26-va-logo-512.png` | VSYC-26 specific logo, 512px |
| `freshly-dirty.png` | Sponsor logo (Freshly Dirty) |
| `kofi-banner.png` | Ko-fi donation banner |

### Image Files (in `assets/images/`)

| File | Description |
| --- | --- |
| `dc-skyline.svg` | DC skyline silhouette, used as hero ornament |
| `dc-skyline-photo.png` | Photographic DC skyline |
| `gallery/gallery-01.png` etc. | Community event photos |

### Logo usage notes

- On dark (navy) backgrounds: apply `filter: brightness(0) invert(1)` to make logo white.
- On light (cream) backgrounds: use `dmvt-logo.png` directly (already red).
- The glyph contains: yo-yo + DC monuments (Lincoln Memorial, Washington Monument, Capitol) + yo-yo string forming a circle + 3 stars (DC flag reference).

---

## File Index

```text
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS variables (colors + typography)
├── assets/
│   ├── logos/                   ← All logo variants
│   └── images/
│       ├── dc-skyline.svg       ← Hero ornament
│       ├── dc-skyline-photo.png
│       └── gallery/             ← Community photos
├── preview/                     ← Design system cards (registered in DS tab)
│   ├── colors-brand.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── colors-vsyc.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing-tokens.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-tags.html
│   ├── components-nav.html
│   ├── brand-logos.html
│   └── brand-imagery.html
└── ui_kits/
    ├── website/                 ← dmvthrowers.club UI kit
    │   ├── README.md
    │   ├── index.html           ← Main club site prototype
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── EventCard.jsx
    │   ├── Footer.jsx
    │   └── ...
    └── yoyomap/                 ← map.dmvthrowers.club UI kit
        ├── README.md
        ├── index.html           ← YoYo Map app prototype
        └── ...
```

---

## Sources

- **Club website codebase:** `dmvthrowers.github.io/` (attached via File System Access API)
- **YoYo Map codebase:** `yoyomap/yoyomap/yoyo-player-map/yoyomap/` (attached via File System Access API)
- **Uploaded logos:** see `uploads/` folder in project
- **GitHub repo:** `dmvthrowers/dmvthrowers.github.io` (read via GitHub integration)
- No Figma files were provided.
