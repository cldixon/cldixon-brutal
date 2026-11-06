# CLAUDE.md

This repo deploys one Brutal instance: the reference one at https://brutal.cldixon.dev (Worker
`brutal`, D1 `brutal`, already claimed). It holds only the owner's settings; the code is the
published `@brutal-ai/server` package, built and released from `cldixon/brutal`, whose
CLAUDE.md and handoff doc describe Brutal itself. Change Brutal there, never here.

- `brutal.config.json`: the settings (`brutal-server setup` rewrites it).
- Deploys: every push to `main` (`.github/workflows/deploy.yml`, with the repo secret
  `CLOUDFLARE_API_TOKEN`), or `bun run deploy`. Never run `bun run secrets`: the instance is
  claimed, and a new setup code would do nothing useful.
- Updating Brutal: `bun update @brutal-ai/server`, commit the lockfile, push.
- bun for everything; set `CF_SEND_TELEMETRY=false`. Do not create or delete Cloudflare
  resources without asking.
