import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        useFlatConfig: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // React ecosystem
          if (
            id.includes('react') ||
            id.includes('react-dom') ||
            id.includes('react-router')
          ) {
            return 'react-vendor';
          }

          // Apollo / GraphQL
          if (
            id.includes('@apollo') ||
            id.includes('graphql') ||
            id.includes('@graphql-sse')
          ) {
            return 'apollo-vendor';
          }

          // Radix UI
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }

          // Charts
          if (id.includes('recharts')) {
            return 'chart-vendor';
          }

          // Utilities
          if (
            id.includes('date-fns') ||
            id.includes('dayjs') ||
            id.includes('xlsx') ||
            id.includes('libphonenumber-js')
          ) {
            return 'utils-vendor';
          }

          // Drag & Drop
          if (id.includes('@hello-pangea/dnd')) {
            return 'dnd-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});