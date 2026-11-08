import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://giupchame.info.vn',
  output: 'static',
  build: {
    format: 'directory'
  }
});

