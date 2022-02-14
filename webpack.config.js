const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // mode: process.env.NODE_ENV,
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    library: 'VueUnleash',
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  target: 'node', // Fix: Unable to reach Unleash API adapter is not a function
  plugins: [new VueLoaderPlugin()]
};
