const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const baseConfig = {
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  },
  entry: [
    path.resolve('./src/index.ts')
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      }
    ]
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
