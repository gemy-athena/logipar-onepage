export default {
  ssr: true,
  target: 'static',
  head: {
    title: 'Logipar - Distributeur de pièces de rechange automobile multimarques',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le spécialiste de la distribution de pièces de rechange automobile multimarques. Logipar opère au sein du réseau Distrigo depuis ses 2 plateformes : Ouest (Torcé) & Provence (Le Luc).' },
      { hid: 'theme-color', name: 'theme-color', content: '#FDF8F3' },
      { hid: 'keywords', name: 'keywords', content: 'logipar, gemy, pièces de rechange, distribution, plateforme, logistique, automobile, multimarques, GemyPR' },

      // Apple Related Tags
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Logipar - Distributeur de pièces de rechange automobile multimarques' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

      // Facebook Open Graph Tags
      { hid: 'og:url', property: 'og:url', content: 'https://logipar.fr' },
      { hid: 'og:locale', property: 'og:locale', content: 'fr' },
      { hid: 'og:title', property: 'og:title', content: 'Logipar - Distributeur de pièces de rechange automobile multimarques' },
      { hid: 'og:description', property: 'og:description', content: 'Le spécialiste de la distribution de pièces de rechange automobile multimarques. Logipar opère au sein du réseau Distrigo depuis ses 2 plateformes : Ouest (Torcé) & Provence (Le Luc).' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Logipar' },
      { hid: 'og:image', property: 'og:image', content: 'https://logipar.fr/assets/logos/logipar_couleur_hd.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:height', property: 'og:image:height', content: '105' },
      { hid: 'og:image:width', property: 'og:image:width', content: '600' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Logo Logipar' },
      { hid: 'og:type', property: 'og:type', content: 'website' },

      // Twitter tags
      { hid: 'twitter:card', name: 'twitter:type', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://logipar.fr/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Logipar - Distributeur de pièces de rechange automobile multimarques' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Le spécialiste de la distribution de pièces de rechange automobile multimarques. Logipar opère au sein du réseau Distrigo depuis ses 2 plateformes : Ouest (Torcé) & Provence (Le Luc).' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://logipar.fr/assets/logos/logipar_couleur_hd.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Logo logipar' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [
    { src: './plugins/vue-carousel.js', ssr: false }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag'
  ],
  content: {},
  build: {},
  robots: {
    Sitemap: 'https://logipar.fr/sitemap.xml'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://logipar.fr',
    cacheTime: '1000 * 60 * 1',
    gzip: true,
    generate: false
  },
  'google-gtag': {
    id: 'UA-120930266-2',
    config: {
      anonymize_ip: false,
      send_page_view: true
    },
    debug: false,
    disableAutoPageTrack: false
  }
}
