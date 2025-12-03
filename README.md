# Stellar MCP Demo

> Comprehensive documentation and interactive examples for building AI-powered blockchain applications using Stellar and the Model Context Protocol (MCP).

## Overview

This project provides everything you need to understand and build with Stellar's MCP ecosystem:

- **Complete Documentation** - Guides, tutorials, and API references
- **Real-World Examples** - Production-ready TypeScript, Python, and Rust code
- **Interactive Tools** - CLI utilities for generating MCP servers and deploying smart contracts
- **Best Practices** - Transaction signing, testing strategies, and deployment patterns

## What is MCP?

The Model Context Protocol enables AI assistants like Claude to securely interact with external tools and data sources. This documentation shows you how to:

- Generate MCP servers from deployed Soroban contracts
- Create policy contracts for smart wallets
- Sign transactions with PasskeyKit
- Integrate with Claude Desktop

## Quick Start

### Prerequisites

- **Node.js** 20 or higher
- **pnpm** 9.15.0 or higher
- **Stellar CLI** (optional, for contract deployment)

### Installation

```bash
# Install dependencies
pnpm install
```

### Run Documentation Site

```bash
# Start development server on http://localhost:3001
pnpm dev

# Or run docs specifically
cd apps/docs
pnpm dev
```

### Build for Production

```bash
# Build all apps
pnpm build

# Preview production build
cd apps/docs
pnpm start
```

## Project Structure

```
stellar-mcp-demo/
├── apps/
│   ├── docs/                    # Nextra documentation site
│   │   ├── content/
│   │   │   ├── guides/         # Step-by-step tutorials
│   │   │   ├── examples/       # Code examples (TS, Python, Rust)
│   │   │   ├── tools/          # CLI tool documentation
│   │   │   └── faq/            # Frequently asked questions
│   │   └── app/                # Next.js App Router
│   └── web/                     # Demo application (coming soon)
└── packages/
    ├── config/                  # Shared ESLint, TypeScript configs
    ├── mcp-client/             # MCP connection utilities
    └── ui/                      # Shared UI components
```

## Documentation Sections

### 🛠️ Tools
- **MCP Generator** - Generate MCP servers from deployed contracts
- **Policy CLI** - Create smart wallet policy contracts

### 📚 Guides
- Generating an MCP Server
- Deploying a Policy Contract
- Claude Desktop Setup
- Transaction Signing Patterns
- PasskeyKit Integration
- Testing Strategies

### 💻 Examples
- **Token Factory** (TypeScript) - Complete MCP server with contract client
- **Policy Contracts** (Rust) - Time locks, amount caps, whitelists, multi-sig
- **Python Server** (FastMCP) - Async contract interactions

### ❓ FAQ
- 50+ common questions
- Troubleshooting guides
- Best practices

## Technology Stack

- **Next.js 15.1.0** - React framework with App Router
- **React 19.0.0** - Latest React version
- **Nextra 4.6.0** - Documentation framework with MDX support
- **TypeScript 5.7.2** - Type-safe development
- **Turborepo 2.3.3** - Monorepo build system
- **pnpm 9.15.0** - Fast, efficient package manager
- **Pagefind** - Static site search

## License

MIT
