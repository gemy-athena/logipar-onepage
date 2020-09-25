export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Logipar - Distributeur de pièces de rechange automobile multimarques',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Le spécialiste de la distribution de pièces de rechange automobile multimarques. Logipar opère au sein du réseau Distrigo depuis ses 2 plateformes : Ouest (Torcé) & Provence (Le Luc).'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  css: [],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  content: {},
  build: {},
  robots: {},
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://logipar.gemy-athena.com',
    cacheTime: 1000 * 60 * 1,
    gzip: true,
    generate: false,
    routes() {
      return getRoutes();
    }
  }
}
