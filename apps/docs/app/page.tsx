import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '18px', fontWeight: 600 }}>Stellar MCP & Policy Plugins</span>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/docs" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
              Documentation
            </Link>
            <Link href="/docs/examples" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
              Examples
            </Link>
            <Link href="https://github.com/stellar" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Stellar MCP & Policy Plugins
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              Build Model Context Protocol servers for the Stellar blockchain. Generate smart contracts
              and accelerate your development workflow.
            </p>
            <Link
              href="https://stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="stellar-brand"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '18px',
                margin: '0 auto 2.5rem auto',
                padding: '0.75rem 1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderRadius: '12px',
                border: '1px solid hsl(var(--border))',
                height: '56px',
                minHeight: 0,
              }}
            >
              <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>Built on</span>
              <Image
                src="/stellar-logo.svg"
                alt="Stellar"
                width={48}
                height={48}
                style={{ width: 48, height: 48 }}
              />
            </Link>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/docs" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/docs/examples" className="btn btn-secondary">
                View Examples
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ background: 'hsl(var(--secondary))' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  MCP Generator
                </h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>
                  Generate MCP servers in TypeScript or Python with smart contract integration,
                  transaction signing, and passkey support.
                </p>
                <Link href="/docs/mcp-generator" style={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', color: 'hsl(var(--foreground))', transition: 'opacity 0.2s' }}>
                  Learn more →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Policy CLI
                </h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>
                  Scaffold complete Stellar smart contract projects with TypeScript bindings,
                  testing infrastructure, and deployment workflows.
                </p>
                <Link href="/docs/policy-cli" style={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', color: 'hsl(var(--foreground))', transition: 'opacity 0.2s' }}>
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid hsl(var(--border))', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <Link href="https://github.com/stellar" style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none' }}>
              GitHub
            </Link>
            <Link href="https://stellar.org" style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none' }}>
              Stellar.org
            </Link>
            <Link href="/docs/faq" style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none' }}>
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
