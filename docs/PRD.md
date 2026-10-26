# Product Requirements Document (PRD)
## Personal Engineering Portfolio — Editorial Logbook Edition

- **Owner**: Hary Suryanto ([@harysuryanto](https://github.com/harysuryanto))
- **Primary Identity**: Mobile & Systems Engineer (Flutter, React Native, Swift)
- **Design Paradigm**: Editorial Engineering Logbook (warm cream/paper palette, Instrument Serif + Geist typography, signal orange accent, dark/light theme)
- **Grounded Evidence**: All metrics and timelines derived directly from git commit history across 8 local checkouts (5,241 authored commits) and the GitHub API (46 public repos).
- **Architecture**: Astro 7 SSG + Tailwind CSS v4 + self-hosted fonts. Native HTML `<details>` case-file disclosures (zero heavy client JS framework).
- **Branch**: `redesign`
- **Deployment**: GitHub Pages via GitHub Actions CI/CD

---

## 1. Product Overview & Strategic Goals

### 1.1 Objective
Present Hary Suryanto as a high-caliber mobile and systems engineer who builds software for demanding real-world operating environments (kiosks, trucks, municipal surveys, open offices). Every single claim, bullet point, and stat is grounded in source code and git history.

### 1.2 Core Metrics & Verifiable Facts
- **5,241 Authored Commits** across 8 app checkouts spanning November 2022 to October 2026.
- **8 Shipped & Production Applications**:
  1. *Papyrus Photobox* (Flutter, Windows/macOS/mobile kiosk HAL, Shorebird OTA, custom chunked MJPEG fork, 3D LUT shaders).
  2. *Product Catalog* (Telkom Indonesia, React Native 0.86, Expo 57, React 19.2, Clean Architecture + MVVM migration, 70+ test files).
  3. *Land Manifest* (Ravaniatech, Expo TaskManager background GPS worker, persistent 500-point FileSystem LocationQueue, WebSocket dispatch).
  4. *SIPKL Kota Bandung* (Pemerintah Kota Bandung via Amal Solution, Mapbox vector maps, Shopify FlashList 60 FPS, 38 test files, EAS Update).
  5. *BRB — Step Away Privacy* (macOS native Swift menu-bar daemon, CoreBluetooth LE RSSI EMA α=0.8 smoothing, 11-suite headless test runner).
  6. *Cash* (React Native, Shopify Skia GPU financial curves, PocketBase, 24-hr offline query persister, multi-model AI receipt scanner).
  7. *Amal Academy Learner* (Flutter, Midtrans Snap payment gateway, lifecycle-aware video player hooks, bilingual ARB l10n).
  8. *Amal Partner Touchpoint* (Flutter, Hooks Riverpod, fl_chart multi-axis analytics, 7 management submodules).
- **12 Curated Open-Source Repositories** from 46 public repos on GitHub with live star counts and push dates.
- **100/100 Lighthouse Performance**: Zero external font requests, zero multi-megabyte UI frameworks, static build output under 1 second.

---

## 2. Information Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ Sticky Masthead Header                                                 │
│ • Monogram [HS] + Role                                                │
│ • Anchor links (#work, #timeline, #approach, #open-source, #contact)   │
│ • Live Jakarta WIB Clock (UTC+7) + Hireable Status + Theme Toggle (☼/☾)│
├────────────────────────────────────────────────────────────────────────┤
│ 1. Masthead Hero                                                       │
│ • Label: MOBILE & SYSTEMS ENGINEER · INDONESIA                         │
│ • Display Serif: "Hary Suryanto"                                       │
│ • Mission: "I engineer mobile clients that survive the real world..."   │
│ • Grounded Stats Strip: 5,241 Commits | 8 Apps | 46 Repos | Since 2016  │
│ • Quick Actions: [Selected Work ↓] [Get in Touch →] [GitHub ↗]         │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Signature Visual: Four-Year Activity Swimlane                       │
│ • 48-month grid (Nov 2022 – Oct 2026) across all 8 projects            │
│ • Intensity blocks scaled by authored commit volume                    │
│ • Tooltip inspection per month block                                  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Selected Work Case Files (01–08)                                    │
│ • Expandable native <details> rows with index, app icon, name, client   │
│ • Expanded: Tagline, 5–6 verified architecture bullets, tech stack     │
│ • Top 2 projects default-open for immediate depth                      │
│ • Global "Expand all" / "Collapse all" control                         │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Engineering Philosophy & Approach                                   │
│ • 4 grounded principles with explicit "Evidence in code" citations:    │
│   01. Assume the network will drop (FileSystem queue / query persister)│
│   02. Ship fixes without app store reviews (Shorebird OTA / EAS Update)│
│   03. Decouple domain rules from framework (Clean Arch / DI / 70+ tests)│
│   04. Treat hardware as untrusted boundary (REST HAL / EMA smoothing)  │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Toolbox                                                             │
│ • Active rotation: Languages, Frameworks, State, Native APIs, Delivery │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Open Source Experiments & Tools                                     │
│ • 12 public GitHub repositories with live stars, languages, and dates  │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Contact & Colophon                                                  │
│ • Direct email card with 1-click clipboard copy toast feedback        │
│ • GitHub and X/Twitter links                                           │
│ • Colophon citing local git generation script and Astro 7 build        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Visual & Design System Specifications

### 3.1 Palette Tokens (CSS Custom Properties)
- **Light Theme (Warm Paper / Editorial)**:
  - Background: `#fbf9f4`
  - Surface: `#ffffff`
  - Subtle Surface: `#f4efe4`
  - Rule / Border: `#e5dec9`
  - Ink (Primary Text): `#181613`
  - Ink Secondary: `#575249`
  - Muted: `#8c8477`
  - Accent (Signal Orange): `#ff5a1f`
- **Dark Theme (Warm Basalt)**:
  - Background: `#100f0d`
  - Surface: `#171512`
  - Subtle Surface: `#201d18`
  - Rule / Border: `#2a261f`
  - Ink: `#f7f4ed`
  - Ink Secondary: `#b7ad9d`
  - Muted: `#7a7264`
  - Accent: `#ff6a33`

### 3.2 Typography Tokens
- **Display Serif**: Instrument Serif (`@fontsource/instrument-serif`), italic and upright, for headlines, section titles, and project taglines.
- **Body & Sans**: Geist Variable (`@fontsource-variable/geist`), for editorial paragraphs, descriptions, and UI text.
- **Data & Mono**: Geist Mono Variable (`@fontsource-variable/geist-mono`), for code references, commit stats, timestamps, badges, and technical annotations.

---

## 4. Maintenance & Scripting

The static dataset `src/data/activity.json` is generated directly from local checkouts using:
```bash
bun run data:activity
```
This updates commit metrics, monthly heatmaps, and live GitHub repository stars/metadata before release.
