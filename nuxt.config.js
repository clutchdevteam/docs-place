// Determine Storyblok access token based on environment
function getStoryblokAccessToken() {
  const isDevelopment = process.env.ENV === 'develop'

  if (isDevelopment) {
    return process.env.STORYBLOK_PREVIEW_API_KEY
  } else {
    return process.env.STORYBLOK_API_KEY
  }
}

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  compatibilityDate: '2024-10-05',
  nitro: {
    preset: 'netlify',
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: "Doc's Place Recovery",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.docsplacerecovery.com',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'A Residential Recovery for Men.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Doc's Place is a long-term residential Drug and Alcohol Rehabilitation Program designed to help men recover from substance abuse and/or alcoholism.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/og-image.png',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://docsplacerecovery.com/og-image.png',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'A Residential Recovery for Men.',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Doc's Place is a long-term residential Drug and Alcohol Rehabilitation Program designed to help men recover from substance abuse and/or alcoholism.",
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://docsplacerecovery.com/og-image.png',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  router: {
    trailingSlash: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/storyblok-components.js', '~/plugins/wicg-inert.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: getStoryblokAccessToken(),
        apiOptions: {
          region: 'eu',
        },
      },
    ],
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  vite: {
    define: {
      'process.env.DEBUG': false,
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['axios'],
    },
    resolve: {
      alias: {
        'form-data': 'form-data',
      },
    },
  },
})
