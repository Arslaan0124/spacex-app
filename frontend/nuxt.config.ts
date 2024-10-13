// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api/": { target: "http://localhost:5000", pathRewrite: { "^/api/": "" } },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:5000",
      spacexApiUrl:
        process.env.SPACEX_API_URL || "https://api.spacexdata.com/v4",
    },
  },
  devtools: { enabled: true },
});
