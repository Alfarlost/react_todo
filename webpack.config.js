const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'bootstrap-loader',
    path.join(__dirname, 'src', 'app-client.js')
  ],
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: {
      index: '/index-static.html'
    }
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: path.join(__dirname, 'src', 'styles'),
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css', {
      publicPath: 'src/static/',
      allChunks: true
    })
  ]
};
