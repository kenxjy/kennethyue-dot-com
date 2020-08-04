export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static' /* default: 'server' */,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Kenneth Yue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: 'Kenneth Yue',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Kenneth Yue, Full-Stack Developer',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Kenneth Yue, Full-Stack Developer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png'},
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png'},
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
      { ref: 'manifest', href: '/manifest.json' }
    ],
    script: [
      {
        src:
          'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/animateOnScroll.js', '@/plugins/data.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
