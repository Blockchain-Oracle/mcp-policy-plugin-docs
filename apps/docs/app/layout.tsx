import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Stellar MCP & Policy Plugins',
    template: '%s | Stellar MCP & Policy Plugins'
  },
  description: 'Generate MCP servers from Soroban contracts and create policy-enforced smart contracts with interactive wizards',
  openGraph: {
    title: 'Stellar MCP & Policy Plugins',
    description: 'Stellar CLI plugins for MCP server generation and policy contract creation',
    siteName: 'Stellar MCP & Policy Plugins',
  },
}

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

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
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
      </body>
    </html>
  )
}
