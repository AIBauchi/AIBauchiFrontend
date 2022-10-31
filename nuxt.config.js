export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AI Saturdays Bauchi Website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "I Love Painting" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "AI Saturdays Bauchi",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: ".",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/a-lovely-image.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@bobross" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://bobross.com",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "AI Saturday Bauchi",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/a-loveley-image.png",
      },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'},
      { rel: 'stylesheet', href: '/stylesheet.css'},
      { rel: 'stylesheet', href: '/animate.min.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],

  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    html: true,
    breaks: true,
    injected: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
}
