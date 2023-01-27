import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import markdown from '@jackfranklin/rollup-plugin-markdown';

import { name } from './package.json';

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

const basePluginsArray = [
  markdown({
    include: '**/*.md',
    exclude: 'README.md',
  }),
  svgr(),
  react(),
  tsconfigPaths(),
];

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProduction
    ? {
        base: `/${name}/`,
      }
    : { build: { sourcemap: true } }),

  plugins: isProduction
    ? [splitVendorChunkPlugin(), ...basePluginsArray]
    : basePluginsArray,
});
