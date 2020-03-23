const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'nats',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude:  /(node_modules|test)/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      pkg: require('./package.json'),
      window: {},
    }),
  ]
};
