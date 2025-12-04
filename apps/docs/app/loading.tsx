import Image from 'next/image'

export default function Loading() {
  return (
    <div className="landing-page">
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          marginBottom: '2rem'
        }}>
          <Image
            src="/stellar-logo.svg"
            alt="Loading"
            width={80}
            height={80}
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />

          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            width: '100px',
            height: '100px',
            border: '2px solid hsl(var(--border))',
            borderRadius: '50%',
            borderTopColor: 'hsl(var(--primary))',
            animation: 'spin 1s linear infinite'
          }} />
        </div>

        <p style={{
          fontSize: '1rem',
          color: 'hsl(var(--muted-foreground))',
          animation: 'fade 1.5s ease-in-out infinite'
        }}>
          Loading...
        </p>
      </div>
    </div>
  )
}
