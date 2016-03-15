module.exports = {
  entry:[
    './js/main.js'
  ],
  output: {
    path: __dirname,
    sourceMapFilename: "[file].map",
    filename: 'bundle.js'
  },
  module: { loaders: [
    { test: /\.html/, loader: "html-loader" }
  ]},
  debug: true
};
