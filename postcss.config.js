if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [require('cssnano')],
  };
}
