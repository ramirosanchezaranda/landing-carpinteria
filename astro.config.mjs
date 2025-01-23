// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// @ts-ignore
import { fileURLToPath } from 'url';
// @ts-ignore
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});
