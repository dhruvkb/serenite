module.exports = {
  pages: {
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Serenite'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
