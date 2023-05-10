import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/mobileapp/api": {
        target: "https://lk.vdk.hopper-it.ru",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "./dist",
  },
  plugins: [
    vue(),
    checker({
      vueTsc: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue,js}" --fix',
      },
      stylelint: {
        // for example, lint .css and .vue
        lintCommand: "stylelint ./src/**/*.{vue,scss,sass}",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
      "@inputs": fileURLToPath(
        new URL("./src/components/inputs", import.meta.url),
      ),
      "@components": fileURLToPath(
        new URL("./src/components/", import.meta.url),
      ),
      "@views": fileURLToPath(new URL("./src/views/", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
      "@static": fileURLToPath(new URL("./src/static/", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils/index.ts", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services/", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks/", import.meta.url)),
      "@constants": fileURLToPath(
        new URL("./src/constants/index.ts", import.meta.url),
      ),
      "@stores": fileURLToPath(new URL("./src/stores/", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types/index.ts", import.meta.url)),
      "@style/mixins": fileURLToPath(
        new URL("./src/assets/styles/mixins/index.scss", import.meta.url),
      ),
      "@style/utility-classes": fileURLToPath(
        new URL("./src/assets/styles/utility-classes/", import.meta.url),
      ),
      "@style/animations": fileURLToPath(
        new URL("./src/assets/styles/animations/", import.meta.url),
      ),
      "@style/variables": fileURLToPath(
        new URL("./src/assets/styles/variables/index.scss", import.meta.url),
      ),
    },
  },
});
