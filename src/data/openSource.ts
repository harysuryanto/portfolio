import activity from './activity.json';

export interface OpenSourceRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  pushedAt: string;
}

const curated: Array<{ name: string; description: string; language?: string }> = [
  {
    name: 'discord_desktop_clone',
    description: 'Discord desktop client clone built with Flutter for Windows and Web using Fluent UI design.',
  },
  {
    name: 'BRB',
    description: 'macOS menu bar presence daemon: blank displays when you walk away, lift when you return. CoreBluetooth LE RSSI smoothing.',
  },
  {
    name: 'avd_manager',
    description: 'Windows desktop utility to launch, manage, and inspect Android Virtual Devices.',
  },
  {
    name: 'clubhouse_clone',
    description: 'Real-time drop-in audio chatroom interface built with React Native.',
  },
  {
    name: 'diff-draft',
    description: 'VS Code extension generating structured commit message drafts from your Git diffs via OpenRouter AI.',
  },
  {
    name: 'Lyripeek',
    description: 'macOS menu-bar app showing time-synced lyrics for currently playing music.',
  },
  {
    name: 'MemVibe',
    description: 'macOS menu bar utility monitoring system memory pressure in real time via Darwin Mach kernel APIs.',
  },
  {
    name: 'tulis',
    description: 'A clean, distraction-free rich-text notepad engineered with Flutter.',
  },
  {
    name: 'zor',
    description: 'Workout planning and exercise tracking mobile application built with Flutter.',
  },
  {
    name: 'tasbih_digital',
    description: 'Digital tasbih and daily dhikr counter mobile app built with React Native.',
  },
  {
    name: 'cute_doggo',
    description: 'Interactive desktop companion built with Flutter and Rive vector animations.',
  },
  {
    name: 'flutter_mjpeg',
    description: 'Maintained fork supporting modern HTTP 1.0+ chunked streams for low-latency live camera viewfinders.',
  },
];

export const openSourceRepos: OpenSourceRepo[] = curated.map((item) => {
  const meta = activity.repos[item.name as keyof typeof activity.repos];
  return {
    name: item.name,
    description: item.description,
    language: meta?.language ?? item.language ?? 'Dart',
    stars: meta?.stars ?? 0,
    url: meta?.url ?? `https://github.com/harysuryanto/${item.name}`,
    pushedAt: meta?.pushedAt ?? '',
  };
});
