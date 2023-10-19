// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@vant/nuxt',
    'nuxt-windicss',
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ar",
        file: "ar.json",
      },
    ],
    lazy: true,
    strategy: "prefix",
    langDir: "locales",
    defaultLocale: "en",
    fallbackLocale: 'en',
  },
});
