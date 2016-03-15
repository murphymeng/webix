module.exports = {
  entry:[
    './js/main.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: { loaders: [
    { test: /\.html/, loader: "html-loader" }
  ]},
  debug: true
};
