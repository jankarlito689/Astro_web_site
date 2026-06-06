// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon'
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
    integrations: [astroIcon({
        iconDir: './src/icons',
    }), react()],
});