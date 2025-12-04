import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="landing-page">
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <Image
            src="/stellar-logo.svg"
            alt="Stellar"
            width={80}
            height={80}
            style={{ opacity: 0.5 }}
          />
        </div>

        <h1 style={{
          fontSize: '6rem',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          404
        </h1>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'hsl(var(--foreground))'
        }}>
          Page Not Found
        </h2>

        <p style={{
          fontSize: '1rem',
          color: 'hsl(var(--muted-foreground))',
          marginBottom: '2rem',
          maxWidth: '28rem'
        }}>
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link href="/docs" className="btn btn-secondary">
            View Documentation
          </Link>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
            Lost in space? Try our{' '}
            <Link
              href="/docs/getting-started"
              style={{
                color: 'hsl(var(--foreground))',
                textDecoration: 'underline',
                textUnderlineOffset: '2px'
              }}
            >
              Getting Started guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
