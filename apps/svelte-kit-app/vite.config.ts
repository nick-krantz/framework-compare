import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [sveltekit()],
  server: {
    // default to vite default of `5173`
    port: Number(process.env.SVELTE_PORT) || 5173
  }
});
