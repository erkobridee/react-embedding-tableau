import path from 'node:path';

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

import { name } from './package.json';

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProduction
    ? {
        base: `/${name}/`,
      }
    : { build: { sourcemap: true } }),

  plugins: isProduction
    ? [splitVendorChunkPlugin(), svgr(), react(), tsconfigPaths()]
    : [svgr(), react(), tsconfigPaths()],
});
