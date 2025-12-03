import type { Config } from 'tailwindcss';
import baseConfig from '@stellar-mcp-demo/config/tailwind';

const config: Config = {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
