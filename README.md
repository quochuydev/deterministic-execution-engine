# Deterministic Execution Engine

A strict, auditable execution engine for outbound communication (email + voice).

## System Guarantees

| Guarantee | Description |
|-----------|-------------|
| Deterministic Behavior | Same inputs always produce the same outputs |
| Full Auditability | Every action is reconstructable from the audit log |
| Replayability | Any execution can be reproduced offline |
| Fail-Closed Safety | No silent failures or hidden fallbacks |
| Vendor Independence | No execution logic tied to specific providers |
| Cost & Policy Enforcement | Budgets, rate limits, and compliance rules enforced at engine level |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the documentation.

## Project Structure

```
content/docs/           # Documentation content (MDX)
  getting-started/      # Overview, installation, quickstart
  core-concepts/        # Execution model, plans, scheduler, audit log, idempotency
  channels/             # Email and voice channel docs
  guides/               # Compliance, debugging, multi-channel sequences
  api-reference/        # Engine, plans, runs API
src/
  app/                  # Next.js app routes
  components/           # UI components
  lib/                  # Source config, layout, utilities
```

## Tech Stack

- [Next.js](https://nextjs.org) - Framework
- [Fumadocs](https://fumadocs.dev) - Documentation engine
- [Tailwind CSS](https://tailwindcss.com) - Styling

## License

[MIT](LICENSE)
