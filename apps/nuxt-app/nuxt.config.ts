// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt",
    },
  },
  css: ["@/assets/global.css"],
  devServer: {
    port: Number(process.env.NUXT_PORT),
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: { wght: [300, 400, 500, 600, 700, 800] },
          download: true,
          inject: true,
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      spotifyAPIEndpoint: "",
    },
  },
  tailwindcss: {
    viewer: false,
  },
  typescript: {
    strict: true,
  },
});
