const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const functions = require('postcss-functions');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postCssLoader = [
  'css-loader?module',
  '&localIdentName=[name]__[local]___[hash:base64:5]',
  '&disableStructuralMinification',
  '!postcss-loader',
];

let plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new ExtractTextPlugin('bundle.css'),
  new webpack.DefinePlugin({
    'process.env': {
      API_URL: JSON.stringify(process.env.API_URL),
      AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
      AUTH0_CLIENT_DOMAIN: JSON.stringify(process.env.AUTH0_CLIENT_DOMAIN),
      NODE_ENV: '"development"',
    },
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      test: /bundle\.js?$/,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ]);

  postCssLoader.splice(1, 1); // drop human readable names
}

const config = {
  entry: {
    bundle: path.join(__dirname, 'client/index.js'),
  },
  output: {
    path: path.join(__dirname, 'server/data/static/build'),
    publicPath: '/static/build/',
    filename: '[name].js',
  },
  plugins,
  module: {
    loaders: [
      { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader', postCssLoader.join('')) },
      { test: /\.(png|gif)$/, loader: 'url-loader?name=[name]@[hash].[ext]&limit=5000' },
      { test: /\.svg$/, loader: 'url-loader?name=[name]@[hash].[ext]&limit=5000!svgo-loader?useConfig=svgo1' },
      { test: /\.(pdf|ico|jpg|eot|otf|woff|ttf|mp4|webm)$/, loader: 'file-loader?name=[name]@[hash].[ext]' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      '#app': path.join(__dirname, 'client'),
      '#c': path.join(__dirname, 'client/modules'),
      '#css': path.join(__dirname, 'client/css')
    }
  },
  svgo1: {
    multipass: true,
    plugins: [
      // by default enabled
      { mergePaths: false },
      { convertTransform: false },
      { convertShapeToPath: false },
      { cleanupIDs: false },
      { collapseGroups: false },
      { transformsWithOnePath: false },
      { cleanupNumericValues: false },
      { convertPathData: false },
      { moveGroupAttrsToElems: false },
      // by default disabled
      { removeTitle: true },
      { removeDesc: true },
    ]
  },
  postcss: function () {
    return [autoprefixer, precss({
      variables: {
        variables: require('./client/css/vars'),
      }
    }), functions({
      functions: require('./client/css/funcs'),
    })];
  }
};

module.exports = config;
