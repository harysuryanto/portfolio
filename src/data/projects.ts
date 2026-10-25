export interface Project {
  id: string;
  index: string;
  name: string;
  client: string;
  kind: string;
  tagline: string;
  platforms: string[];
  stack: string[];
  icon?: string;
  monogram?: string;
  color: string;
  featured: boolean;
  built: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'papyrus',
    index: '01',
    name: 'Papyrus Photobox',
    client: 'Papyrus & A-CODE Tech',
    kind: 'Kiosk & Hardware Pipeline',
    tagline:
      'Unattended photobooth kiosk client running on desktop and tablet hardware with external camera capture, live viewfinder streaming, and instant thermal printing.',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'Web'],
    stack: [
      'Flutter',
      'Riverpod',
      'GLSL Shaders',
      'Shorebird OTA',
      'Camera REST HAL',
      'MJPEG',
      'WebRTC',
      'fpdart',
    ],
    icon: '/src/assets/icons/papyrus.png',
    color: '#0284c7',
    featured: true,
    built: [
      'Separated camera hardware into a dedicated local REST service (/api/camera/capture, /api/camera/status) rather than fragile native driver bindings inside the Flutter process.',
      'Maintained a custom open-source fork of flutter_mjpeg supporting HTTP 1.0+ chunked stream parsing to feed the live kiosk viewfinder with zero dropped frames.',
      'Wrote custom fragment shaders (assets/shaders/lut_filter.frag) to apply real-time 3D Look-Up Table (LUT) color grading filters without blocking the UI thread.',
      'Integrated Shorebird Code Push (ShorebirdUpdater) to deliver critical logic and promotional layout hotfixes over the air to unattended shopping mall kiosks without physical site visits.',
      'Built a touchscreen kiosk interaction shell with window_manager for borderless desktop display control and a multi-language on-screen virtual keyboard.',
      'Automated thermal and inkjet print validation pipeline with printer status polling (getIsPrinterAvailableProvider) and QRIS digital payment verification.',
    ],
    repoUrl: 'https://github.com/harysuryanto/flutter_mjpeg',
  },
  {
    id: 'product-catalog',
    index: '02',
    name: 'Product Catalog',
    client: 'Telkom Indonesia',
    kind: 'Enterprise Sales Enablement',
    tagline:
      'B2B consultative sales app for corporate account executives: interactive product browsing, competitor price matrix comparisons, and financial margin calculations.',
    platforms: ['Android', 'iOS'],
    stack: [
      'React Native 0.86',
      'Expo SDK 57',
      'React 19.2',
      'Clean Architecture',
      'TanStack Query',
      'NativeWind',
      'Zod',
      'Jest',
    ],
    monogram: 'PC',
    color: '#e11d48',
    featured: true,
    built: [
      'Migrated 16 of 29 feature modules to Clean Architecture + MVVM, decoupling Domain Entities, Use Cases, and Repositories from React component trees.',
      'Wired per-feature Dependency Injection containers (di/container.ts) that allow instantaneous swapping between mock data sources and live backend endpoints.',
      'Built isolated unit and component test suites spanning 70+ test files using Jest and React Native Testing Library.',
      'Upgraded to modern Expo SDK 57 and React Native 0.86 with React 19.2 concurrent primitives, styled with NativeWind Tailwind utility layers.',
      'Encapsulated multi-tier enterprise telecommunication discount formulas and competitor matrix comparisons into pure, side-effect-free domain use cases.',
    ],
  },
  {
    id: 'land-manifest',
    index: '03',
    name: 'Land Manifest',
    client: 'Ravaniatech',
    kind: 'Fleet Logistics & Telemetry',
    tagline:
      'Driver dispatch and freight manifest app: background GPS tracking, dead-zone offline queuing, live WebSocket vehicle telemetry, and on-screen delivery sign-off.',
    platforms: ['Android', 'iOS'],
    stack: [
      'React Native',
      'Expo SDK 54',
      'Expo TaskManager',
      'WebSocket',
      'NativeWind',
      'FileSystem Queue',
      'TanStack Query',
    ],
    icon: '/src/assets/icons/land-manifest.png',
    color: '#0f766e',
    featured: true,
    built: [
      'Implemented background location telemetry worker using expo-task-manager and expo-location (background-location-task) that runs continuously in the background during transit.',
      'Engineered LocationQueue, an atomic persistent file-system buffer holding up to 500 GPS coordinate points when drivers lose signal in tunnels or remote freight corridors.',
      'Built reconnect-flush engine: when connectivity returns, queued coordinates flush in batches of 10 points (with a 3-consecutive-failure threshold to prevent battery drain).',
      'Streamed real-time vehicle GPS coordinates, speedometer telemetry, and shipment order state to dispatch servers over a persistent WebSocket connection.',
      'Integrated digital proof-of-delivery signature canvas (react-native-signature-canvas) and high-density QR code manifest dispatch scanning across 18 feature modules.',
    ],
  },
  {
    id: 'sipkl',
    index: '04',
    name: 'SIPKL Kota Bandung',
    client: 'Pemerintah Kota Bandung (via Amal Solution)',
    kind: 'Municipal Field GIS',
    tagline:
      'Geospatial field survey and vendor governance app for municipal officers registering and zoning street micro-businesses across the city of Bandung.',
    platforms: ['Android', 'iOS'],
    stack: [
      'React Native',
      'Expo SDK 50',
      '@rnmapbox/maps',
      'Shopify FlashList',
      'Zod',
      'expo-image-manipulator',
      'EAS Update',
    ],
    icon: '/src/assets/icons/sipkl.png',
    color: '#15803d',
    featured: true,
    built: [
      'Engineered vector map picker, live location puck, and spatial coordinate markers using @rnmapbox/maps (MapView, Camera, MarkerView).',
      'Eliminated scroll stutter on dense vendor directories by adopting Shopify FlashList (@shopify/flash-list) for 60 FPS view recycling on budget field Android devices.',
      'Implemented pre-upload client-side image downsampling via expo-image-manipulator, scaling high-resolution camera photos down to 1024px at 50% JPEG quality to survive 3G cellular uplinks.',
      'Enforced type-safe form validations across vendor permits, business categories, and location records using Zod and React Hook Form.',
      'Shipped 38 test files covering utilities, 10 API services, custom hooks, and React contexts using Jest and React Native Testing Library.',
      'Maintained independent EAS Update channels (preview and production) for safe staging verification before field deployment.',
    ],
  },
  {
    id: 'brb',
    index: '05',
    name: 'BRB — Step Away Privacy',
    client: 'Open Source (Personal)',
    kind: 'macOS Bluetooth Proximity Daemon',
    tagline:
      'Menu-bar utility for wireless-earbud wearers: monitors Bluetooth LE radio signal strength to blank displays with a privacy veil when you walk away, without killing your user session.',
    platforms: ['macOS'],
    stack: [
      'Swift 5',
      'SwiftUI',
      'AppKit',
      'CoreBluetooth',
      'ServiceManagement',
      'Signal Processing',
    ],
    icon: '/src/assets/icons/brb.png',
    color: '#2563eb',
    featured: false,
    built: [
      'Built real-time 0.5s LE sampling engine evaluating BLE GATT link state and peripheral advertisement packets with Exponential Moving Average (EMA, α = 0.8) smoothing.',
      'Eliminated false-positive locks from office radio jitter via an asymmetric 6 dBm hysteresis deadband (Veil-On at −80 dBm, Veil-Off at −74 dBm) and a 10s grace delay.',
      'Enforced freshness gates (GATT < 3s, advertising < 12s) and pinned devices by peripheral identifier to prevent extrapolating from stale radio samples.',
      'Created AppKit multi-screen VeilWindowController that blankets every attached display at screen-saver window level without tearing down active terminal sessions.',
      'Wrote a standalone, 11-suite zero-dependency verification test runner (Tests/EngineValidationTests.swift) exercising presence transitions, hysteresis, and default states.',
    ],
    repoUrl: 'https://github.com/harysuryanto/BRB',
  },
  {
    id: 'cash',
    index: '06',
    name: 'Cash',
    client: 'Personal',
    kind: 'Offline-First Wealth Engine',
    tagline:
      'Personal finance tracker built for longevity: hardware-accelerated Skia charts, multi-model AI receipt scanning, CSV bank importers, and 24-hour offline query persistence.',
    platforms: ['Android', 'iOS', 'Web'],
    stack: [
      'React Native',
      'Expo SDK 52',
      'TypeScript',
      'Shopify Skia',
      'TanStack Query',
      'PocketBase',
      'NativeWind',
    ],
    icon: '/src/assets/icons/cash.png',
    color: '#475569',
    featured: false,
    built: [
      'Rendered interactive Net Worth trajectory curves and Cash Flow trend charts at 60 FPS using @shopify/react-native-skia and victory-native canvas pipelines.',
      'Configured offline query persistence with @tanstack/query-async-storage-persister, caching entire server state locally in AsyncStorage for 24-hour offline availability.',
      'Built an automated CSV transaction importer (src/utils/importers/sribuu.ts) for Sribuu bank exports with column mapping and duplicate detection.',
      'Integrated multi-model AI receipt scanning (aiScannerService.ts) with automatic fallback failover across Gemini, Groq, and OpenRouter vision endpoints.',
      'Coupled with a self-hosted PocketBase backend (pocketbaseService.ts) managing relational financial records and authenticated token synchronization.',
    ],
  },
  {
    id: 'amal-academy',
    index: '07',
    name: 'Amal Academy (Learner)',
    client: 'Amal Academy',
    kind: 'EdTech Mobile Platform',
    tagline:
      'Consumer education app for students to discover courses, watch video lessons, manage wishlists, and purchase learning tracks with integrated digital checkouts.',
    platforms: ['Android', 'iOS', 'macOS', 'Windows', 'Linux', 'Web'],
    stack: [
      'Flutter',
      'Dart',
      'Hooks Riverpod',
      'Midtrans Snap',
      'GoRouter',
      'YouTube Player',
    ],
    icon: '/src/assets/icons/amal-academy.png',
    color: '#7c3aed',
    featured: false,
    built: [
      'Integrated Midtrans Snap SDK (midtrans_snap) handling multi-method Indonesian digital payment checkouts with secure token handshakes.',
      'Implemented embedded YouTube video lesson player (youtube_player_flutter) wrapped with lifecycle-aware hooks to prevent video controller memory leaks.',
      'Configured bilingual internationalization (English and Indonesian) via official Flutter ARB localization files (app_en.arb, app_id.arb).',
      'Organized into 16 modular feature packages (wishlist, voucher, transactions_history, cart, order, etc.) managed via Hooks Riverpod.',
    ],
  },
  {
    id: 'amal-partner',
    index: '08',
    name: 'Amal Partner (Touchpoint)',
    client: 'Amal Academy',
    kind: 'Partner Operations Dashboard',
    tagline:
      'Front-end dashboard build for course creators and educational partners to manage curricula, examinations, student questions, and sales performance charts.',
    platforms: ['Android', 'iOS', 'macOS', 'Windows', 'Linux', 'Web'],
    stack: [
      'Flutter',
      'Dart',
      'Hooks Riverpod',
      'FL Chart',
      'GoRouter',
      'Flutter Hooks',
    ],
    icon: '/src/assets/icons/amal-academy.png',
    color: '#9333ea',
    featured: false,
    built: [
      'Designed interactive revenue and enrollment analytics charts using the fl_chart package with custom multi-axis touch tooltips.',
      'Constructed management flows across 7 content submodules: question banks, course inventories, examination papers, syllabi, attachments, classes, and bootcamps.',
      'Built a shared component library of customized gradient buttons, status chips, preview dialogs, and text inputs reused across partner workflows.',
      'Structured as an immutable mock-data prototype validating partner user-journey ergonomics before live API synchronization.',
    ],
  },
];
