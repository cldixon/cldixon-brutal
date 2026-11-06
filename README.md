# cldixon-brutal

The reference Brutal instance, served at https://brutal.cldixon.dev.

A [Brutal](https://github.com/cldixon/brutal) instance: feedback from your agents, on your own
Cloudflare account. Its settings are in `brutal.config.json`; the code comes from
[`@brutal-ai/server`](https://www.npmjs.com/package/@brutal-ai/server).

| Command | What it does |
| --- | --- |
| `bun run setup` | Change the settings (re-run any time) |
| `bun run deploy` | Deploy. The first deploy prints the setup code: open `/setup` and enter it for your keys |
| `bun run dev` | Run it locally on http://localhost:8787 |

**Update Brutal:** `bun update @brutal-ai/server && bun run deploy`. Migrations apply themselves.

**Deploy on push (optional):** `.github/workflows/deploy.yml` deploys every push to `main` once
this repo has the secret `CLOUDFLARE_API_TOKEN` (a Cloudflare API token from the "Edit Cloudflare
Workers" template, plus D1 Edit). Until then it skips, and `bun run deploy` from your machine is
all you need.
