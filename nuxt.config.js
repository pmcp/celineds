require('dotenv').config()
const pkg = require('./package')
    // PURGE CSS INFO FROM https://www.purgecss.com/guides/nuxt
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
import purgecss from '@fullhuman/postcss-purgecss'
module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Comes from: https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        // scss: ['assets/scss/file/_path.scss', 'assets/scss/file/_path-two.scss']
    },
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            plugins: [
                purgecss({
                    content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
                    whitelist: ['html', 'body']
                })
            ]
        },
        /*
         ** You can extend webpack config here
         */
        extractCSS: true,
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            if (!ctx.isDev) {
                // Remove unused CSS using PurgeCSS. See https://github.com/FullHuman/purgecss
                // for more information about PurgeCSS.
                config.plugins.push(new PurgecssPlugin({
                    paths: glob.sync([
                        path.join(__dirname, './pages/**/*.vue'),
                        path.join(__dirname, './layouts/**/*.vue'),
                        path.join(__dirname, './components/**/*.vue')
                    ]),
                    whitelist: ['html', 'body']
                }))
            }
        }
    },
    generate: {
        routes: async() => {
            let { data } = await axios.post(process.env.COCKPIT_API_URL + 'collections/get/projects?token=' + process.env.COCKPIT_API_TOKEN, JSON.stringify({
                filter: { published: true },
                sort: { _created: -1 },
                populate: 1
            }), {
                headers: { 'Content-Type': 'application/json' }
            })
            return data.entries.map(project => {
                function convertToSlug(Text) {
                    return Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                }
                return {
                    route: project.slug,
                    payload: project
                }
            })
        }
    }
}