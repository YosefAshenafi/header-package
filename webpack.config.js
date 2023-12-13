const path = require('path');

module.exports = {
  entry: './index.js', // Update with your entry file
  output: {
    filename: 'bundle.js', // Update with your desired output file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
