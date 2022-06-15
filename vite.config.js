import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
// import vercel from 'vite-plugin-vercel'
// import vercelSsr from '@magne4000/vite-plugin-vercel-ssr'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      vue(), 
      ssr(), 
      // vercel(), 
      // vercelSsr(),
      WindiCSS({
      scan: {
        // By default only `src/` is scanned
        dirs: ["pages", "components"],
        // We only have to specify the file extensions we actually use.
        fileExtensions: ["vue", "js", "ts", "jsx", "tsx"]
      }
    })],
    build: {
      polyfillDynamicImport: false,
    },
    vercel: {
      expiration: 25,
    },
  };
});