module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'soonfy personal website',
    titleTemplate: '%s - soonfy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt,vue,koa,element-ui,echarts,socket.io' },
      { hid: 'description', name: 'description', content: 'soonfy personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/reset.css',
    '~assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions', 'Android >= 4.4', 'iOS >= 6']
      })
    ],
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }]]]
    },
    vendor: ['element-ui', 'axios', 'lodash']
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/font', ssr: true },
    { src: '~plugins/method', ssr: true },
  ]
}
