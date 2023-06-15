import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/calculator',
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react(), svgr()],
  build: {
    outDir: 'build',
  },
});
