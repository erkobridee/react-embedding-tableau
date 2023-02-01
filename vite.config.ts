import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { name } from './package.json';

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

const basePluginsArray = [
  mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] }),
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
