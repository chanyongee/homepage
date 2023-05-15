export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: { host: '0', port: 3001 },
  router: {
    base: '/',
  },
  styleResources: {
    scss: ['./assets/scss/index.scss'],
  },
  alias: {
    '@': `<srcDir>`,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '(주)좋은이엔지',
    script: [
      { src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=0d9nbomngk', async: false, defer: true },
      {
        src: 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js',
        charset: 'UTF-8',
        class: 'daum_roughmap_loader_script',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google', content: 'notranslate' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/pagination.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push(
        {
          // lodash 용량을 줄이기 위한 옵션
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          options: {
            presets: [['@babel/preset-env', { modules: false, targets: { node: 'current' } }]],
          },
        },
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              use: [
                'babel-loader',
                {
                  loader: 'vue-svg-loader',
                  options: {
                    svgo: {
                      plugins: [{ removeDoctype: true }, { removeComments: true }],
                    },
                    name: 'assets/[name].[hash:8].[ext]',
                  },
                },
              ],
            },
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash:8].[ext]',
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-svg-inline-loader',
        },
      )
    },
  },
  lintOnSave: false,
  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }],
    },
  },
}
