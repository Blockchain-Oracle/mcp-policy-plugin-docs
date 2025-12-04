import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

const logo = (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
    <span>Stellar MCP & Policy Plugins</span>
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/stellar"
  />
)

const footer = (
  <Footer>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '12px' }}>
      <p style={{ fontSize: '12px', color: '#666' }}>
        MIT {new Date().getFullYear()} - Stellar MCP & Policy Plugins
      </p>
    </div>
  </Footer>
)

export default async function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/stellar/stellar-mcp-demo"
      footer={footer}
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      editLink="Edit this page on GitHub"
    >
      {children}
    </Layout>
  )
}
