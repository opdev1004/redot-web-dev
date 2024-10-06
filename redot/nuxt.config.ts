// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  site: {
    url: "https://www.redotengine.org/",
    name: "Redot Engine",
  },
  modules: [
    "vuetify-nuxt-module",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
  ],
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "/redot-web/",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "~/tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: "./vuetify.config.ts",
  },
});
