import type { z } from 'zod';

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: z.ZodObject<any>;
  category: ToolCategory;
}

export type ToolCategory = 'configuration' | 'transaction' | 'query' | 'admin';

export interface ToolExecutionResult {
  type: 'text' | 'json' | 'xdr';
  content: string;
  metadata?: {
    executionTime?: number;
    toolName: string;
    params: any;
  };
}

export interface MCPConnectionConfig {
  serverUrl: string;
  transport: 'sse' | 'http-proxy';
  timeout?: number;
}

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

export interface MCPConnectionState {
  status: ConnectionStatus;
  config?: MCPConnectionConfig;
  error?: string;
  lastConnected?: Date;
}

export class MCPConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MCPConnectionError';
  }
}

export class ToolDiscoveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ToolDiscoveryError';
  }
}

export class ToolExecutionError extends Error {
  context?: {
    toolName: string;
    params: any;
    originalError?: Error;
  };

  constructor(message: string, context?: ToolExecutionError['context']) {
    super(message);
    this.name = 'ToolExecutionError';
    this.context = context;
  }
}
