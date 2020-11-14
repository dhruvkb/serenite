module.exports = {
  pages: {
    newtab: {
      template: 'public/newtab.html',
      entry: './src/newtab/main.js',
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
