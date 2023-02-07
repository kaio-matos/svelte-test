import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [vitePreprocess(), preprocess({
        postcss: true
    })],

    kit: {
        adapter: adapter({
            // if true, will create a Netlify Edge Function rather
            // than using standard Node-based functions
            edge: false,

            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app.
            // if `edge` is true, this option cannot be used
            split: false
        }),
        alias: {
            '@src': './src',
            '@lib': './src/lib',
            '@components': './src/lib/components',
            '@stores': './src/lib/stores',
            '@templates': './src/lib/templates',
            '@utils': './src/lib/utils',
            '@services': './src/services',
            '@interfaces': './src/interfaces',
            '@validation': './src/validation',
            '@styles': './src/styles'
        }
    }
};

export default config;
