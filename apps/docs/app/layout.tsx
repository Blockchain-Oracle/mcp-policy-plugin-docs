import { Head } from 'nextra/components'
import './globals.css'
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
