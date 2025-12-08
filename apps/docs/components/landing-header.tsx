'use client'

import { useState } from 'react'
import Link from 'next/link'

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header" style={{ position: 'relative', zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '18px', fontWeight: 600 }}>Stellar MCP & Policy Plugins</span>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/docs" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
            Documentation
          </Link>
          <Link href="/docs/examples" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
            Examples
          </Link>
          <Link href="https://github.com/JoseCToscano/stellar-mcp" style={{ textDecoration: 'none', color: 'hsl(var(--muted-foreground))' }}>
            GitHub
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            display: 'none', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '8px',
            color: 'hsl(var(--foreground))'
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="mobile-nav"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'hsl(var(--background))',
            borderBottom: '1px solid hsl(var(--border))',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Link 
            href="/docs" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', color: 'hsl(var(--foreground))', padding: '0.5rem' }}
          >
            Documentation
          </Link>
          <Link 
            href="/docs/examples" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', color: 'hsl(var(--foreground))', padding: '0.5rem' }}
          >
            Examples
          </Link>
          <Link 
            href="https://github.com/JoseCToscano/stellar-mcp" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', color: 'hsl(var(--foreground))', padding: '0.5rem' }}
          >
            GitHub
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}
