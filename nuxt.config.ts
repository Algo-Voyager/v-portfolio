export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n', // Updated module
  ],

  experimental: {
    payloadExtraction: false
  },

  plugins: [],

  colorMode: {
    classSuffix: '',
  },

  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true;
      }
    },
  },

  css: [
    '/assets/css/style.css',
  ],

  build: {
    transpile: ['primevue', 'pinia-orm'],
  },

  tailwindcss: {
    cssPath: [
      "~/assets/css/tailwind.css",
      { injectPosition: 0 }
    ],
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
  // Add nitro config for manifest
  nitro: {
    prerender: {
      failOnError: false,
    }
  },

  vue: {
    config: {
      performance: true,
    },
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ion-'),
    },
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      // { code: 'tr', file: 'tr.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',  // Changed since we only have one language
    vueI18n: './i18n.config.ts'  // Change this to string path instead of object
  },

  compatibilityDate: '2025-01-08',
});