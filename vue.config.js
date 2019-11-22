module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views':'@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "assets/css/base.scss";
        `
      }
    }
  }
}