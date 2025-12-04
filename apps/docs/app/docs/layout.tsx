import { Layout, Navbar } from 'nextra-theme-docs'
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

function prefixRoutes(items: any[], prefix: string): any[] {
  return items.map(item => {
    if (item.route && !item.route.startsWith(prefix)) {
      item.route = prefix + item.route
    }
    if (item.children) {
      item.children = prefixRoutes(item.children, prefix)
    }
    return item
  })
}

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  const prefixedPageMap = prefixRoutes(pageMap, '/docs')

  return (
    <Layout
      navbar={navbar}
      pageMap={prefixedPageMap}
      docsRepositoryBase="https://github.com/stellar/stellar-mcp-demo"
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      editLink="Edit this page on GitHub"
    >
      {children}
    </Layout>
  )
}
