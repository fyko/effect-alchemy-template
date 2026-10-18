# effect-alchemy-template

Template for Effect + Alchemy projects on Cloudflare Workers. Vite+ monorepo:

- `apps/` — deployable entry points. `apps/api` is an Effect `HttpApi` Worker with `GET /health`.
- `packages/` — shared code packages.

## Setup

```sh
mise install
pnpm install   # also runs `effect-tsgo patch --oxlint` so Effect lint rules run in `vp check`
```

## Commands

```sh
pnpm check              # vp check (fmt, lint, typecheck) + tests
pnpm dev                # API in local workerd (alchemy dev)
pnpm plan:production
pnpm deploy:production
pnpm destroy:production
```

## Lint stack

- [anti-slop](https://github.com/dmmulroy/anti-slop), vendored at `tools/oxlint/anti-slop` (see its `UPSTREAM.md`).
- [`@effect/tsgo`](https://github.com/Effect-TS/tsgo) `recommended` oxlint preset (type-aware Effect rules).
- TypeScript 7 (the Go compiler) for type-aware linting and type checking.

> Bones from https://github.com/dmmulroy/overseer + [docs](./docs)
