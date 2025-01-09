// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-proxy'],
  proxy: {
    options: {
      target: 'http://localhost:8000',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/server': '',
      },
      pathFilter: [
        '/api/server',
      ]
    }
  },
})
