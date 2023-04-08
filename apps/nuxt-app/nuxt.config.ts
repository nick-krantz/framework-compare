// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/global.css"],
  devServer: {
    port: Number(process.env.NUXT_PORT),
  },
  modules: ["@nuxtjs/tailwindcss"],
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
