module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
       }
    ],
  }
};