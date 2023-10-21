import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta;

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: 9527,
      open: true
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});