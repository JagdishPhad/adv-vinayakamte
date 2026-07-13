import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React dependencies - separated for long-term browser caching
          // React/ReactDOM change infrequently, allowing aggressive cache-control headers
          vendor: ['react', 'react-dom'],
          // Icon library - isolated to prevent vendor cache invalidation on icon updates
          icons: ['lucide-react'],
          // Email service - separated to keep core bundle lean for mobile users
          // who may not immediately interact with the contact form
          email: ['@emailjs/browser'],
        },
      },
    },
    minify: 'esbuild',
    sourcemap: false,
    target: 'es2020',
    // Performance optimizations
    cssCodeSplit: true,
    reportCompressedSize: false, // Faster builds
  },
  server: {
    port: 3000,
    open: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', '@emailjs/browser'],
  },
});
