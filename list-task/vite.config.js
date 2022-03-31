import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  rollupOptions: {
    input: 'src/entry-file.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost',
  server: {
    port: 3011,
    strictPort: true
  },
  plugins: [svelte()],
}