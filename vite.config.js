import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import { glob } from 'glob';

export default defineConfig(
    {
        appType: 'Me-portafolio',
        base: process.env.DEPLOY_BASE_URL || '/',
        build: {
            rollDownOptions: {
                input: obtenerHtmlFiles()
            }
        },

        plugins: [
            purgecss({
                content: glob.sync('./index.html').concat(glob.sync('./*.js')),
                safelist: ['carousel-btn', 'btnleft', 'btnright', 'error', 'error-text']
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