const path = require('path');

const modulelist = [
  '@babel/polyfill',
  'react',
  'react-dom',
  'prop-types',
  'axios',
  'lodash.debounce',
  'lodash.pickby',
];

const moduleList = modulelist.join('|');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: {
    app: ['./lib/renderers/dom.js'],
  },
  optimization: {
    //runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: new RegExp(
            `[\\/]node_modules[\\/]${moduleList}[\\/]`
          ),
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};