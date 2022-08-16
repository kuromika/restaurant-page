const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'developer',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};