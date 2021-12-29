const path = require('path')
// const { ProvidePlugin, DefinePlugin } = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

function resolve(dir) {
  return path.join(__dirname, dir)
}



const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
    }
  },
  // pluginOptions: {
  //   quasar: {
  //     importStrategy: 'kebab',
  //     rtlSupport: false
  //   }
  // },
  // transpileDependencies: ['quasar']
}
