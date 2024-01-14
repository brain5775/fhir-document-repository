// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Document Repository",
    },
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  build: {},
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "nuxt-lodash", "nuxt-svgo"],
  svgo: {
    autoImportPath: "~/assets/mini-icon",
  },
  alias: {
    "@": resolve(__dirname, "/"),
    "@assets": resolve(__dirname, "/assets"),
  },
  runtimeConfig: {
    public: {},
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  imports: {
    dirs: ["stores"],
  },
  router: {
    // extendRoutes(routes) {
    //   for (const key in routes) {
    //     routes[key].caseSensitive = true;
    //   }
    // },
    options: {
      sensitive: true,
      strict: true,
    },
  },
});
