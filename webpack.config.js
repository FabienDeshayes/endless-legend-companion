var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}
