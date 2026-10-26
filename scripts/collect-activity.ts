// Regenerates src/data/activity.json from local git history and the GitHub API.
// Run locally (needs the project checkouts and an authenticated `gh`): bun run data:activity
import { $ } from 'bun';

const AUTHOR = 'hary';
const GITHUB_USER = 'harysuryanto';

// Project id -> local checkout (relative to repo root). Ids match src/data/projects.ts.
const repos: Record<string, string> = {
  papyrus: 'projects/papyrusphotobox',
  'product-catalog': 'projects/product-catalog-mobile',
  'land-manifest': 'projects/land-manifest-ravaniatech',
  sipkl: 'projects/sipkl-mobile',
  'amal-academy': 'projects/ctp-fe-mobile',
  'amal-partner': 'projects/ptp-fe-mobile',
  cash: '../cash',
  brb: '../BRB',
};

// Curation (which repos to show, blurbs) lives in src/data/openSource.ts; this only records live stats.

type ProjectActivity = { commits: number; first: string; last: string; months: Record<string, number> };

const projects: Record<string, ProjectActivity> = {};
for (const [id, path] of Object.entries(repos)) {
  const out = await $`git -C ${path} log --all -i --author=${AUTHOR} --format=%ad --date=short`.text();
  const dates = out.trim().split('\n').filter(Boolean).sort();
  if (dates.length === 0) throw new Error(`No commits by ${AUTHOR} in ${path}`);
  const months: Record<string, number> = {};
  for (const d of dates) months[d.slice(0, 7)] = (months[d.slice(0, 7)] ?? 0) + 1;
  projects[id] = { commits: dates.length, first: dates[0], last: dates[dates.length - 1], months };
}

type GhRepo = {
  name: string;
  description: string | null;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
  isFork: boolean;
  url: string;
  pushedAt: string;
};
const ghRepos: GhRepo[] =
  await $`gh repo list ${GITHUB_USER} --visibility public --limit 200 --json name,description,stargazerCount,primaryLanguage,isFork,url,pushedAt`.json();

const repoStats = Object.fromEntries(
  ghRepos.map((r) => [
    r.name,
    {
      description: r.description ?? '',
      stars: r.stargazerCount,
      language: r.primaryLanguage?.name ?? null,
      fork: r.isFork,
      url: r.url,
      pushedAt: r.pushedAt.slice(0, 10),
    },
  ]),
);

const profile = await $`gh api users/${GITHUB_USER}`.json();

const activity = {
  generatedAt: new Date().toISOString().slice(0, 10),
  github: {
    publicRepos: profile.public_repos as number,
    since: (profile.created_at as string).slice(0, 4),
    hireable: Boolean(profile.hireable),
  },
  projects,
  repos: repoStats,
};

await Bun.write('src/data/activity.json', JSON.stringify(activity, null, 2) + '\n');
const total = Object.values(projects).reduce((n, p) => n + p.commits, 0);
console.log(`Wrote src/data/activity.json — ${Object.keys(projects).length} projects, ${total} commits, ${ghRepos.length} public repos`);
