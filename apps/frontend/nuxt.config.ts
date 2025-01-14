// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-proxy', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true
    }
  },
  proxy: {
    options: {
      target: 'http://localhost:8080',
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
