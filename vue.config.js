const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // 引入 Svg 需要搭配這個, 不然會出錯
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['svg-sprite-loader']
        }
      ]
    }
  },
  // 引入 Svg 檔案(主要寫在 main.js)
  chainWebpack: (config) => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/main.ts'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  }
}
