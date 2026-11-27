import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

const PRODUCTION_ORIGIN = 'https://maintenance.aeromexicobusiness.com/';

// The failover worker can serve this page under aeromexicobusiness.com, so every asset needs an absolute URL.
const resolveBase = (): string => {
  if (process.env.MAINTENANCE_PUBLIC_URL) {
    return process.env.MAINTENANCE_PUBLIC_URL.replace(/\/?$/, '/');
  }
  if (process.env.CF_PAGES_BRANCH === 'main') {
    return PRODUCTION_ORIGIN;
  }
  if (process.env.CF_PAGES_URL) {
    return `${process.env.CF_PAGES_URL.replace(/\/$/, '')}/`;
  }
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  base: resolveBase(),
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   allowedHosts: true
  // }
});
