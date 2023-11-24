import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://ingfabianduran.github.io/Viio-test/',
  test: {
    environment: 'jsdom',
  },
});
