export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Terminal",
    loading: {
      color: "blue",
      height: "5px"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    "bulma",
    // CSS file in the project
    "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/css/main.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy"

  ],
  content: {
    // Options
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
