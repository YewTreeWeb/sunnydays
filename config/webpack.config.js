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
          cacheDirectory: true,
          presets: ['@babel/preset-env', 'babel-preset-airbnb'],
          // plugins: [
          //   '@babel/plugin-syntax-dynamic-import',
          //   '@babel/plugin-transform-runtime',
          //   '@babel/plugin-transform-async-to-generator',
          // ],
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
    filename: 'app.js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     runtimeChunk: true,
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendor',
  //         test: /[\\/]node_modules[\\/]/,
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  externals: {
    jquery: 'jQuery',
    browser: 'browser',
    breakpoints: 'breakpoints',
  },
  plugins: [
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
