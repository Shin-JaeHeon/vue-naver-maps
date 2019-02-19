const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const baseConfig = {
  entry: [
    path.resolve('./src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {target: 'node'}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/,
        ]
      }
    ],
  }, plugins: [
    new VueLoaderPlugin(),
  ],
  mode: 'development'
};

const webConfig = {
  ...baseConfig,
  externals: {
    vue: 'Vue',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "vue-naver-maps.js",
    library: ["VueNaverMaps"],
    libraryTarget: "umd"
  }
};

module.exports = [
  webConfig
];
