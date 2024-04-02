// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon", "@vueuse/nuxt"],
  tailwindcss: {
    exposeConfig: true,
  },
  css: ["@/styles/index.css"],
  ssr: false,
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      TMDB_API_KEY: process.env.TMDB_API_KEY,
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
