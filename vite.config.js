import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_bouchaour-adam/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/portfolio_bouchaour-adam/assets/index-c0f0071c.js' // Exemple d'externalisation
      ],
      output: {
        assetFileNames: `assets/[name]-[hash][extname]`,
        chunkFileNames: `assets/[name]-[hash].js`,
        entryFileNames: `assets/[name]-[hash].js`
      }
    }
  }
});