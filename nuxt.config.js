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
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://logipar.gemy-athena.com'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Logipar'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Logipar'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'fr'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `~/assets/logos/logo_logipar_ouest_blc.png`
      },
      {
        name: 'msapplication-TileColor',
        content: '#FDF8F3'
      },
      {
        name: 'theme-color',
        content: '#FDF8F3'
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
  robots: {
    Sitemap: `~/sitemap.xml`
    },
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
