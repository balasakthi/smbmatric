// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  css: ["assets/style/main.css"],

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true | false,
      useIconCDN: true | false,

      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true | false,
      useVuetifyLabs: true | false, 
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SMB Matric. School - Dindigul",
      meta: [
        {
          name: "description",
          content: "Welcome to our SMB Matric. School.",
        },
      ],
    },
  },
})
