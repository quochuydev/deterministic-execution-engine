import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Deterministic Execution Engine
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          A strict, auditable execution engine for outbound communication.
          Every email sent. Every call made. Fully deterministic and traceable.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:opacity-90"
          >
            Read the Docs
          </Link>
          <Link
            href="/docs/getting-started/quickstart"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            Quickstart
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl w-full">
        <FeatureCard
          title="Deterministic"
          description="Same inputs, same execution, every time. Logical clock scheduling eliminates non-determinism."
        />
        <FeatureCard
          title="Auditable"
          description="Every action reconstructable. Append-only hash-chained logs for tamper-evident traceability."
        />
        <FeatureCard
          title="Replayable"
          description="Reproduce any execution offline. Verify runs against the original trace for debugging or compliance."
        />
        <FeatureCard
          title="Fail-Closed"
          description="No silent failures or fallbacks. If something breaks, the engine stops and surfaces it."
        />
        <FeatureCard
          title="Vendor Independent"
          description="Pluggable channel adapters. Switch email or voice providers without touching execution logic."
        />
        <FeatureCard
          title="Policy Enforced"
          description="Budgets, rate limits, consent, and calling hours enforced at the engine level. No bypasses."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:bg-fd-accent">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </div>
  );
}
