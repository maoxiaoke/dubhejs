const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'muse.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true
    })
  ]
}
