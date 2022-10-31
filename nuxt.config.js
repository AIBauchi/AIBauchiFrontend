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
      { hid: 'description', name: 'description', 
         content: 'AI Bauchi is a STUDENT COMMUNITY.\
                   A community for students from all across \
                   bauchi state, providing a platform for learning, \
                   sharing experiences and leveraging their knowledge to \
                   create AI-enabled social impact solutions along with spreading \
                   AI awareness in an inclusive way.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "AI Saturday Bauchi" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://aibauchi.com.ng",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "AI Saturdays Bauchi",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "AI Bauchi is a STUDENT COMMUNITY.\
        A community for students from all across \
        bauchi state, providing a platform for learning, \
        sharing experiences and leveraging their knowledge to \
        create AI-enabled social impact solutions along with spreading \
        AI awareness in an inclusive way.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo.png",
      },
      { property: "og:image:width", content: "150" },
      { property: "og:image:height", content: "150" },
      { name: "twitter:site", content: "@aibauchi" },
      { name: "twitter:card", content: "AI Saturday Bauchi" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://aibauchi.com.ng",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "AI Saturday Bauchi",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "AI Bauchi is a STUDENT COMMUNITY.\
        A community for students from all across \
        bauchi state, providing a platform for learning, \
        sharing experiences and leveraging their knowledge to \
        create AI-enabled social impact solutions along with spreading \
        AI awareness in an inclusive way.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/logo.png",
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
