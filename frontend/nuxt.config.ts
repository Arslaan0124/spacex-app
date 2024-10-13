// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:5000",
      spacexApiUrl:
        process.env.SPACEX_API_URL || "https://api.spacexdata.com/v4",
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  devtools: { enabled: true },
});
