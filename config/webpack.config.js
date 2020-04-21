import webpack from 'webpack'
import yargs from 'yargs'
import TerserPlugin from 'terser-webpack-plugin'
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
        },
      },
      {
        enforce: 'pre',
        test: /\.jsx$|\.es6$|\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          cache: true,
          fix: true,
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
    minimize: prod ? true : false,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          output: {
            comments: !prod ? true : false,
          },
        },
        chunkFilter: (chunk) => {
          // Exclude uglification for the `vendor` chunk
          if (chunk.name === 'vendors') {
            return false
          }

          return true
        },
        cache: true,
        extractComments: false,
      }),
    ],
  },
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
    }),
  ],
}
