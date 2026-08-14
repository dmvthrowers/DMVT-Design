# AGENTS.md — DMVT-Design

Orientation for any AI agent landing in this repo cold.

## What this is

The brand/design-system source of truth for DMV Throwers (DC/MD/VA yo-yo & skill toy club) and
its three products: the club website (`dmvthrowers.club`, repo: `dmvthrowers.github.io`), the
VSYC-26 contest sub-site (same repo, separate CSS), and the YoYo Map app
(`map.dmvthrowers.club`, repo: `yoyo-player-map`, Next.js/Tailwind/Leaflet/Supabase). This repo
doesn't ship a product itself — it's reference material + a Claude Skill package that other
repos' work should stay consistent with.

**It's packaged as a Claude Code Skill** (`SKILL.md`, `user-invocable: true`, name
`dmv-throwers-design`) — invoking `/dmv-throwers-design` in a session pulls in `README.md` as
the design brief. `README.md` is the real content: full color tables (three sub-palettes —
main site red/navy/cream, VSYC-26 gold/navy, YoYo Map's brighter red), typography (Playfair
Display / DM Sans / Montserrat, all Google Fonts, no local font files), spacing tokens, the
"zero border radius everywhere" brand rule, button/nav/card conventions, voice & tone, and
iconography rules. Read `README.md` directly for anything design-related — don't rely on this
file to have transcribed all of it accurately.

**One correctness note baked into the README itself, worth repeating because it's an active
bug elsewhere**: canonical brand red is `#B80000`. The YoYo Map codebase (a different repo)
previously used `#D42B2B` — the README explicitly flags that as a bug to fix, not an
alternate valid value.

## Layout

```
README.md              the real design system doc -- colors, type, spacing, voice, components
SKILL.md                Claude Skill manifest, points at README.md
ui_kits/                per-product component previews
  website/               React JSX components (Nav/Hero/Footer/EventCard) + a static preview
  vsyc26/, yoyomap/       static HTML previews
preview/                 rendered token/component reference pages (colors, type, spacing, etc.)
YYBC/, uploads/           raw logo/sticker/merch image assets, not organized by product
*Brand Book*.html         two large exported brand-book documents (main + VSYC-26), print variants included
colors_and_type.css       standalone CSS with the color/type tokens from README.md
deck-stage.js             slide-deck-style JS, purpose not verified -- check before assuming it's live-used
```

## Gotchas

- **`.github/` here is mostly inert template scaffolding** (codeql, stale-bot, labeler, a
  `profile/` subfolder, issue templates) inherited from wherever this repo's skeleton came
  from — it doesn't reflect this repo's actual CI needs. A prior commit already removed some
  duplicated/nested `.github/.github` cruft; more may remain. Don't assume these workflows are
  meaningful to this specific repo without checking what they actually do.
- **`.vs/` and `.vscode/` are editor artifacts**, not project config to rely on.
- **`lets build brand guidelines and assets based on the design syste.zip`** (1.6MB, root of
  repo) looks like a raw deliverable/export from whatever session originally produced this —
  historical, not something to unpack and treat as current unless you've checked its contents
  against the live README first.
- **This repo has no build step and no tests** (`git log` shows no CI beyond the generic
  template workflows above) — it's reference content + static preview HTML, not an app.

## Verify

There's nothing to run — this is a content/reference repo. To sanity-check a design decision
against the source of truth: read the relevant section of `README.md` directly, or open the
matching page under `preview/` in a browser for a rendered look.
