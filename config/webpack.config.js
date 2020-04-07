import webpack from 'webpack'
import yargs from 'yargs'
const prod = yargs.argv.prod

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$|\.es6$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', 'babel-preset-airbnb'],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-transform-async-to-generator',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: prod ? 'production' : 'development',
  devServer: {
    historyApiFallback: true,
  },
  devtool: !prod ? 'inline-source-map' : false,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendor',
  //         test: /[\\/]node_modules[\\/]/,
  //         enforce: true,
  //       },
  //     },
  //   },
  //   runtimeChunk: true,
  // },
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
