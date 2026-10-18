# Agent Instructions

## Project Standards

Read [`docs/coding-standards.md`](docs/coding-standards.md) before writing or reviewing code. Review finished code against those standards before declaring the work complete.

Read [`docs/errors.md`](docs/errors.md) before adding or changing typed errors, error messages, public error contracts, HTTP error statuses, retry guidance, or failure telemetry.

Before adding or moving a workspace, package dependency, or cross-workspace import, apply [`Monorepo Boundaries`](docs/coding-standards.md#monorepo-boundaries).

Before changing a parser, schema boundary, persisted representation, migration, or constrained state, apply [`Provenance and Parsing`](docs/coding-standards.md#provenance-and-parsing) and [`Persistence Provenance and Recovery`](docs/coding-standards.md#persistence-provenance-and-recovery).

Before proposing or changing lint rules, plugin behavior, parser-API enforcement, or complexity policy, read [`Slop Prevention Research`](docs/research/slop-prevention.md).

Every environment must receive isolated infrastructure with the same capability topology: production and preview/test stages provision stage-owned live resources, while local stages use faithful local providers where available. Apply [`Environment-Isolated Infrastructure`](docs/coding-standards.md#environment-isolated-infrastructure) before adding resources, fixed physical names, cross-Stack references, or infrastructure task dependencies.

## Learning more about Effect

This repository uses the Effect Typescript library.

Before writing any Effect code, first read `node_modules/effect/AGENTS.md`
**completely**, and follow the links in the file when required.

If you need to learn more about particular Effect apis and concepts that the
guide doesn't cover, search through the source code in `node_modules/effect/src`.

## Reference repos

`repos/effect` and `repos/alchemy` are read-only, shallow git submodules of upstream source, used for research and doc links. Each is pinned to the release commit matching the installed `effect` / `alchemy` version.

- If a submodule is empty, run `git submodule update --init`.
- Never edit files inside `repos/`, and never run `git submodule update --remote`.
- When bumping `effect` or `alchemy`, bump the submodule pin in the same change:
  `git -C repos/effect fetch --depth 1 origin tag effect@<version> && git -C repos/effect checkout effect@<version>` (alchemy tags are `v<version>`), then `git add repos/effect`.
