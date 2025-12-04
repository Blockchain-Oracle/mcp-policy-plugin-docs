'use client'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      background: '#121212',
      color: '#fafafa'
    }}>
      <div style={{
        maxWidth: '600px',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <div style={{
          fontSize: '8rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#fafafa',
          lineHeight: 1,
          textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
        }}>
          404
        </div>

        <h2 style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#fafafa'
        }}>
          Lost in Space
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: '#a3a3a3',
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          Looks like this page took a one-way trip to a black hole.
          Let's get you back on track.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a
            href="/"
            style={{
              padding: '1rem 2rem',
              background: '#fafafa',
              color: '#000',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.background = '#ffffff'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.background = '#fafafa'
            }}
          >
            Go Home
          </a>
          <a
            href="/docs"
            style={{
              padding: '1rem 2rem',
              border: '2px solid #262626',
              color: '#fafafa',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'transparent',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#262626'
              e.currentTarget.style.borderColor = '#404040'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#262626'
            }}
          >
            Browse Docs
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
