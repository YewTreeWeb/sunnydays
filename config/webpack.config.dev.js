const webpack = require('webpack')
const path = require('path')
const ROOT_DIRECTORY = process.cwd()

module.exports = {
  entry: path.resolve(ROOT_DIRECTORY, 'website/src/js/app.js'),
  output: {
    path: path.resolve(ROOT_DIRECTORY, 'website/assets/js'),
    filename: 'app.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    // historyApiFallback: true,
    contentBase: path.resolve(ROOT_DIRECTORY, 'website'),
    publicPath: '/assets/js/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.es6$|\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-airbnb'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-async-to-generator',
            ],
          },
        },
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
    browser: 'browser',
    breakpoints: 'breakpoints',
  },
  plugins: [
    // so that file hashes don't change unexpectedly
    new webpack.HashedModuleIdsPlugin(),
    // Set dependencies in global scope
    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      cloudinary: 'cloudinary-core',
      browser: 'browser',
      breakpoints: 'breakpoints',
      localForage: 'localforage',
    }),
  ],
}
