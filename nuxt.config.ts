// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Document Repository",
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
        },
        {
          src: "https://apis.google.com/js/api.js",
        },
      ],
    },
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  build: {
    publicPath: "/public/",
    vendor: ["isomorphic-fetch"],
    extractCSS: true,
    extend(config: any, ctx: any) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
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
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-svgo",
    "nuxt-vue3-google-signin",
  ],
  svgo: {
    autoImportPath: "~/assets/mini-icon",
  },
  googleSignIn: {
    clientId:
      "139802416482-br9sc0vevt9o2ktavb2v7bdegka161b5.apps.googleusercontent.com",
  },
  // alias: {
  //   "@": resolve(__dirname, "/"),
  //   "@assets": resolve(__dirname, "/assets"),
  // },
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
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      CLIENT_ID: process.env.VITE_GD_CLIENT_ID,
      API_KEY: process.env.VITE_API_KEY,
      ENPOINT: process.env.ENDPOINT,
    },
  },
});
