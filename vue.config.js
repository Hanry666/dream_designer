const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      template: 'public/index.html',
      entry: 'src/main.js',
      filename: 'index.html',
      title:'喜迎二十大,科创向未来',
    }
  }
})
