const title = ''
const description = ''
const image = 'https://image-1.bituclub.com/images/bitu_photo/618396a02324695d15ac60c0.jpeg'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Virtual School',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'description',
                name: 'description',
                content: description,
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: title,
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: description,
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: image,
            },
            {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: title,
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: title,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: description,
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: image,
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: image,
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: title,
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '1200',
            },
            {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '628',
            },
            {
                hid: 'fb:app_id',
                property: 'fb:app_id',
                content: '434651647197691',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.ico' }],
        scripts: [],
    },

    // Globa`l CSS: https://go.nuxtjs.dev/config-css
    // css: ['~assets/styles/libs/bootstrap.scss', '~assets/styles/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // '~/plugins/api.plugin.ts',
        // { src: '~/plugins/agora.ts', mode: 'client' },
        // { src: '~/plugins/livekit.ts', mode: 'client' },
        // { src: '~/plugins/constants.ts', mode: 'client' },
        // { src: '~/plugins/vuex-persist.ts', mode: 'client' },
        // { src: '~/plugins/mqtt.js', mode: 'client' },
        // { src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.BITU_BACKEND_URL || '$BITU_BACKEND_URL',
    },

    healthcheck: {
        path: '/status',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        transpile: {}
    },

    publicRuntimeConfig: {
        iosAppURL: 'https://apps.apple.com/by/app/bitu-luy%E1%BB%87n-n%C3%B3i-ti%E1%BA%BFng-anh/id1551918315',
        androidAppURL: 'https://play.google.com/store/apps/details?id=com.bitu.user&utm_source=bituweb&utm_medium=landingpage&utm_campaign=official',
    },
    // build time
    // EXPOSE ENV TO CLIENT SIDE
    env: {
        BASE_URL: process.env.BASE_URL || '$BASE_URL',
        BITU_BACKEND_URL: process.env.BITU_BACKEND_URL || '$BITU_BACKEND_URL',
        MQTT_HOST: process.env.MQTT_HOST || '$MQTT_HOST',
        MQTT_PORT: process.env.MQTT_PORT || '$MQTT_PORT',
        AGORA_APP_ID: process.env.AGORA_APP_ID || '$AGORA_APP_ID',
    },

    server: {
        host: '0.0.0.0',
        port: 3000,
    },
}
