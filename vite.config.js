import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import { glob } from 'glob';

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL || '/',
  plugins: [
    purgecss({
      content: glob.sync('./index.html').concat(glob.sync('./src/JS/*.js')),
      safelist: ['abierto', 'activa', 'ok', 'err', 'error']
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});