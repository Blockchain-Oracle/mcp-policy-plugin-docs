# Story: MCP-UI Demo Web Application

**Story ID**: `DEMO-001`
**Epic**: Interactive Stellar MCP Demonstration
**Type**: Feature
**Priority**: High
**Estimated Effort**: 5-8 days

## Summary

Build an interactive web application that demonstrates the full Stellar MCP workflow using the MCP-UI SDK. The application will serve as both a demo and documentation platform, showcasing how to interact with Stellar smart contracts through a natural language interface powered by MCP.

## User Story

**As a** developer exploring Stellar MCP integration
**I want** to see a working demo web application with live contract interactions
**So that** I can understand how to build similar applications and integrate MCP-UI into my own projects

## Context & Background

The contract deliverable requires:
- ✅ Stellar MCP Server (done)
- ✅ Policy Signer CLI (done)
- ✅ Python MCP support (done)
- ❌ **Demo agent** - Interactive web application showing the full flow
- ❌ **Documentation** - Comprehensive docs in SEP format
- ❌ **Infrastructure** - CI/CD and deployment templates

This story focuses on building the demo agent as a **monorepo web application** with:
1. **Documentation site** - Nextra-based docs (inspired by truthMarket/sealtrust-docs)
2. **Demo web app** - Next.js + shadcn/ui interactive demo
3. **MCP-UI integration** - Full implementation using @mcp-ui/server and @mcp-ui/client

## Technical Architecture

### Monorepo Structure
```
stellar-mcp-demo/
├── apps/
│   ├── docs/           # Nextra documentation site
│   └── web/            # Next.js demo application
├── packages/
│   ├── ui/             # Shared UI components (shadcn/ui)
│   ├── stellar-mcp/    # MCP client utilities
│   └── config/         # Shared configs (TypeScript, ESLint, etc.)
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

### Tech Stack

**Monorepo Management:**
- Turborepo for build orchestration
- pnpm workspaces for dependency management

**Documentation (apps/docs):**
- Nextra (Next.js-based documentation framework)
- MDX for rich content
- Inspired by structure from `/Users/apple/dev/hackathon/haluout/truthMarket/sealtrust-docs`
- Sections:
  - Getting Started
  - MCP Server Setup
  - Policy Signer Guide
  - API Reference
  - Examples & Tutorials
  - SEP-style Standardization Docs

**Demo Application (apps/web):**
- Next.js 14+ (App Router)
- TypeScript
- shadcn/ui components
- Tailwind CSS
- @mcp-ui/client for rendering UI resources
- React Query for data fetching

**MCP Integration:**
- @mcp-ui/server (TypeScript) for server-side UI resources
- @mcp-ui/client (React) for rendering
- Integration with deployed Stellar MCP server

## Acceptance Criteria

### Functional Requirements

1. **Monorepo Setup**
   - [ ] Initialize Turborepo monorepo
   - [ ] Configure pnpm workspaces
   - [ ] Set up shared TypeScript config
   - [ ] Configure shared ESLint/Prettier
   - [ ] Add build pipeline (turbo.json)

2. **Documentation Site (apps/docs)**
   - [ ] Initialize Nextra with Next.js
   - [ ] Create documentation structure:
     - Introduction & Overview
     - Installation Guide
     - Quick Start Tutorial
     - MCP Server Configuration
     - Policy Signer Walkthrough
     - API Reference
     - Architecture Decision Records (SEP format)
     - Examples & Code Snippets
   - [ ] Add search functionality
   - [ ] Mobile-responsive design
   - [ ] Deploy to Vercel/Netlify

3. **Demo Web Application (apps/web)**
   - [ ] Initialize Next.js 14+ with App Router
   - [ ] Set up shadcn/ui components
   - [ ] Create landing page explaining MCP-UI flow
   - [ ] Implement chat interface for natural language input
   - [ ] Integrate `<UIResourceRenderer />` from @mcp-ui/client
   - [ ] Connect to deployed Stellar MCP server
   - [ ] Display interactive UI resources from server
   - [ ] Show transaction flow visualization:
     - User prompt → MCP tool call → Transaction XDR → Signature → Submission → Result
   - [ ] Error handling and loading states
   - [ ] Mobile-responsive design

4. **MCP-UI Integration**
   - [ ] Set up @mcp-ui/server utilities in shared package
   - [ ] Create UI resources for common Stellar operations:
     - Account creation
     - Token transfers
     - Smart contract invocations
     - Policy signer demonstrations
   - [ ] Implement UI action handlers (tool calls, prompts, notifications)
   - [ ] Add transaction signing flow with UI feedback
   - [ ] Display transaction results in interactive components

5. **Example Workflows**
   - [ ] **Workflow 1**: Create account → Fund with testnet XLM → Show balance
   - [ ] **Workflow 2**: Deploy token contract → Mint tokens → Transfer
   - [ ] **Workflow 3**: Create policy signer → Set rules → Execute controlled transaction
   - [ ] **Workflow 4**: Natural language prompt → Contract interaction → Transaction submission

### Non-Functional Requirements

1. **Performance**
   - [ ] Documentation site loads in < 2s
   - [ ] Demo app responds to user input in < 500ms
   - [ ] MCP tool calls complete within reasonable time (< 5s for simple operations)

2. **Developer Experience**
   - [ ] Clear README in each workspace
   - [ ] Development mode with hot reload
   - [ ] Type-safe APIs throughout
   - [ ] Comprehensive error messages

3. **Deployment**
   - [ ] Vercel deployment configuration for both apps
   - [ ] Environment variable management
   - [ ] CI/CD pipeline (GitHub Actions)
   - [ ] Automatic deployments on PR merge

4. **Documentation Quality**
   - [ ] Code examples are tested and working
   - [ ] All screenshots are up-to-date
   - [ ] API references match actual implementation
   - [ ] SEP-format standardization docs explain:
     - Function calling conventions
     - Expected inputs/outputs
     - Application patterns
     - Usage examples

## Implementation Plan

### Phase 1: Monorepo Setup (Day 1)
1. Initialize Turborepo with Next.js template
2. Configure pnpm workspaces
3. Set up shared packages (ui, config, stellar-mcp)
4. Add build scripts and dev environment

### Phase 2: Documentation Site (Days 2-3)
1. Initialize Nextra in apps/docs
2. Study truthMarket/sealtrust-docs structure for inspiration
3. Create documentation pages:
   - Overview and architecture
   - Setup guides
   - API reference
   - SEP-format standardization
4. Add search and navigation
5. Deploy to Vercel

### Phase 3: Demo Application Foundation (Days 3-4)
1. Initialize Next.js app with App Router
2. Set up shadcn/ui and create base components
3. Implement landing page
4. Create chat interface mockup
5. Add routing and navigation

### Phase 4: MCP-UI Integration (Days 4-6)
1. Install and configure @mcp-ui packages
2. Create shared stellar-mcp package with utilities
3. Implement UI resource creation for Stellar operations
4. Add `<UIResourceRenderer />` to demo app
5. Connect to deployed MCP server
6. Implement UI action handlers
7. Add transaction flow visualization

### Phase 5: Example Workflows (Days 6-7)
1. Build account creation workflow
2. Build token transfer workflow
3. Build policy signer workflow
4. Build natural language → contract workflow
5. Add interactive tutorials

### Phase 6: Polish & Deploy (Day 8)
1. Error handling and edge cases
2. Loading states and animations
3. Mobile responsiveness
4. Performance optimization
5. Final testing
6. Production deployment
7. Update documentation with deployment URLs

## Technical Decisions

### Why Turborepo?
- Optimal build caching for monorepo
- Fast builds with incremental compilation
- Great DX for multi-package projects

### Why Nextra for Docs?
- Built on Next.js (same stack as demo)
- Excellent MDX support
- Fast and SEO-friendly
- Beautiful default theme
- Easy customization

### Why shadcn/ui?
- Component library that you own
- Built on Radix UI (accessible)
- Tailwind-based (customizable)
- TypeScript first
- Copy-paste architecture (no NPM bloat)

### Why MCP-UI SDK?
- Open spec for UI over MCP
- Remote DOM support
- Sandboxed iframe rendering
- Rich UI interactions beyond text
- Active community and examples

## Dependencies

### External Dependencies
- Deployed Stellar MCP server (testnet)
- Launchtube integration (for transaction signing)
- Mercury API (for passkey wallets)
- Stellar testnet RPC endpoint

### Internal Dependencies
- stellar-mcp codebase (for documentation references)
- stellar-policy-cli (for policy signer examples)
- Python MCP templates (for multi-language docs)

## Testing Strategy

1. **Unit Tests**
   - Utility functions in packages
   - Component rendering (React Testing Library)
   - MCP integration helpers

2. **Integration Tests**
   - Full MCP tool call flow
   - Transaction signing and submission
   - UI resource rendering

3. **E2E Tests** (Playwright)
   - Complete user workflows
   - Cross-browser compatibility
   - Mobile responsiveness

4. **Manual Testing**
   - User acceptance testing
   - Accessibility audit
   - Performance testing

## Success Metrics

1. **Functionality**
   - All example workflows work end-to-end
   - MCP server integration stable
   - Zero critical bugs in production

2. **Usability**
   - Users can complete a workflow in < 5 minutes
   - Clear error messages guide users
   - Documentation answers common questions

3. **Performance**
   - Lighthouse score > 90
   - First contentful paint < 1.5s
   - Time to interactive < 3s

4. **Documentation Quality**
   - 100% API coverage
   - All code examples tested
   - Clear troubleshooting guide

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| MCP server instability | High | Add retry logic, fallback UIs, comprehensive error handling |
| Complex MCP-UI integration | Medium | Start with simple examples, reference official docs, use provided examples |
| Monorepo complexity | Medium | Follow Turborepo best practices, keep configs simple, document setup |
| Documentation becomes outdated | Medium | Automate testing of code examples, version docs with releases |
| Performance issues | Low | Use Next.js optimization, lazy load components, optimize images |

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and approved
- [ ] Unit and integration tests passing
- [ ] E2E tests covering critical paths
- [ ] Documentation complete and reviewed
- [ ] Deployed to production (Vercel)
- [ ] Monitoring and error tracking set up
- [ ] Performance metrics meet targets
- [ ] Client approval received

## References

- [MCP-UI SDK Documentation](https://mcpui.dev)
- [MCP-UI GitHub](https://github.com/idosal/mcp-ui)
- [Nextra Documentation](https://nextra.site)
- [shadcn/ui](https://ui.shadcn.com)
- [Stellar MCP Repository](https://github.com/JoseCToscano/stellar-mcp)
- Inspiration: `/Users/apple/dev/hackathon/haluout/truthMarket/sealtrust-docs`

## Notes

- This is the primary demo deliverable for the contract
- Should serve as reference implementation for future integrations
- Documentation will be used by external developers
- Code quality is critical as this represents the project publicly
