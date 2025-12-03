import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@stellar-mcp-demo/ui';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Stellar MCP Demo</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Connect to MCP Server</CardTitle>
              <CardDescription>
                Establish a connection to your Stellar MCP server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connection functionality coming in STORY-002
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discover Tools</CardTitle>
              <CardDescription>
                Automatically discover available Stellar operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tool discovery coming in STORY-002
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Execute Operations</CardTitle>
              <CardDescription>
                Run Stellar operations through dynamic forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dynamic forms coming in STORY-003
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction Signing</CardTitle>
              <CardDescription>
                Visualize and sign Stellar transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Transaction visualization coming in STORY-004
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
