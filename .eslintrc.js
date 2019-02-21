module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: "webpack.config.prod.js"
      }
    }
  },
};
