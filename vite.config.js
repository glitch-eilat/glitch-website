import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/glitch-website/', // ◄-- השורה הזו קריטית עבור GitHub Pages!
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        private: resolve(__dirname, 'private.html'),
        groups: resolve(__dirname, 'groups.html'),
      },
    },
  },
});