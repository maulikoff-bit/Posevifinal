import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change this to your real domain once you have one.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
