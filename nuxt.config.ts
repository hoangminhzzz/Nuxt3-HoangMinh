// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app:{
        head:{
            title: 'Hoang Minh',
            meta:[
                { name: 'description', content: 'Everything about nuxt.js'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons'}
            ]
        }
    },
    runtimeConfig:{
        currencyKey: process.env.CURRENCY_API_KEY
    }

})
