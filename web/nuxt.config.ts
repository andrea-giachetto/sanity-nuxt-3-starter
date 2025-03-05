export default defineNuxtConfig({
  debug: true,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#000000",
        },
        {
          rel: "shortcut icon",
          href: "/favicons/favicon.ico",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  modules: [
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unlazy/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxtjs/color-mode",
  ],

  svgo: {
    autoImportPath: "./assets/svg/",
  },

  imports: {
    dirs: ["stores"],
  },

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.COMPATIBILITY_DATE,
    useCdn: true,
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true,
      },
    },
  },

  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: "it",
        file: "it-IT.json",
        iso: "it-IT",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "it",
  },
});
