const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import '@/assets/css/variables.scss';`
            }
        }
    },
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/web-folio/'
        : '/',
    devServer: {
        proxy: process.env.NODE_ENV === 'production'
            ? 'https://fake-json-server-nt.herokuapp.com'
            : 'http://localhost:7000/api'
    }
})
