// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon", "@vueuse/nuxt", "@pinia-plugin-persistedstate/nuxt",
],
  tailwindcss: {
    exposeConfig: true,
  },
  css: ["@/styles/index.css"],
  ssr: false,
  runtimeConfig: {
    NUXT_TMDB_API_KEY: process.env.NUXT_TMDB_API_KEY,
    NUXT_TMDB_API_BASE_URL: process.env.NUXT_TMDB_API_BASE_URL,
    public: {
      NUXT_FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
      NUXT_FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      NUXT_FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
      NUXT_FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      NUXT_FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      NUXT_FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
    },
  },
  app: {
    head: {
      title: "FlixWatch",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "FlixWatch is a movie and TV show database that allows you to search and filter through a vast collection of movies and TV shows.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://keiths.sirv.com/Images/flix_ico.svg",
        },
      ],
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: "NuxtLink",
        externalRelAttribute: "noopener noreferrer",
        activeClass: "router-link-active",
        exactActiveClass: "router-link-exact-active",
      },
    },
  },
});
