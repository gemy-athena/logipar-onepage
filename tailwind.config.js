const { colors, zIndex } = require('tailwindcss/defaultTheme.js')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    screens: {
      sm: '10px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    zIndex: {
      ...zIndex,
      neg: -10
    },
    colors: {
      ...colors,
      orange: {
        50: '#FDF8F3',
        100: '#FCF1E7',
        200: '#F7DBC2',
        300: '#F2C59D',
        400: '#E89A54',
        500: '#DE6F0B',
        600: '#C8640A',
        700: '#854307',
        800: '#643205',
        900: '#432103'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/custom-forms')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
