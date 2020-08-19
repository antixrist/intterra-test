module.exports = {
  lintOnSave: false,

  // chainWebpack: config => {
  //   // Taken from https://vue-svg-loader.js.org/faq.html#how-to-prefix-id-attributes
  //   const svgRule = config.module.rule('svg');
  //
  //   svgRule.uses.clear();
  //   svgRule
  //     .oneOf('inline')
  //     .resourceQuery(/inline/)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .end()
  //     .end()
  //     .oneOf('external')
  //     .use('babel-loader')
  //     .loader('babel-loader')
  //     .end()
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader')
  //     .options({
  //       name: 'assets/[name].[hash:8].[ext]',
  //       svgo: {
  //         plugins: [{ removeDimensions: false }, { removeViewBox: false }],
  //       },
  //     });
  //
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign(options, { esModule: false, limit: 2048 }));
  // },
};
