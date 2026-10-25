export interface Principle {
  number: string;
  title: string;
  summary: string;
  evidence: string;
}

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Assume the network will drop',
    summary:
      'Mobile devices operate in elevator shafts, tunnels, and shopping mall basements. When a mutation happens, persist it immediately to disk and flush asynchronously when the socket or handshake restores.',
    evidence:
      'Engineered atomic FileSystem queues buffering up to 500 coordinates in Land Manifest and 24-hour AsyncStorage query persisters in Cash.',
  },
  {
    number: '02',
    title: 'Ship fixes without waiting for app store reviews',
    summary:
      'When an unattended photobooth kiosk in a shopping center encounters a broken flow or a promotional layout update, you cannot wait 48 hours for review or dispatch a technician with a USB drive.',
    evidence:
      'Integrated Shorebird over-the-air code push in Papyrus Photobox and configured separate preview/production EAS Update channels in SIPKL.',
  },
  {
    number: '03',
    title: 'Decouple domain rules from the framework',
    summary:
      'Pricing algorithms, BLE signal filtering, and financial calculations should never live inside component render trees. When domain logic is pure, it can be tested in milliseconds without mocking UI frameworks.',
    evidence:
      'Migrated 16 feature modules in Telkom Product Catalog to Clean Architecture with DI containers and 70+ test files; wrote headless Swift test harnesses for BRB.',
  },
  {
    number: '04',
    title: 'Treat hardware as an untrusted boundary',
    summary:
      'External DSLR cameras, thermal printers, and Bluetooth radios have jitter, timeout, and firmware surprises. Wrap hardware in dedicated abstraction layers and smooth raw sensor telemetry before it reaches state.',
    evidence:
      'Decoupled Papyrus camera controls into a companion REST HAL, and smoothed raw BLE RSSI samples with α=0.8 exponential moving averages in BRB.',
  },
];
