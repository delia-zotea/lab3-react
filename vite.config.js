import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // Acesta va permite importuri precum: import { Button } from '@/components/Button';
    },
  },
  plugins: [react()],
});
