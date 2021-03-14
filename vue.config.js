module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/main.scss";',
      },
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
};
