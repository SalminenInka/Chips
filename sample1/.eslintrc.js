/* eslint-disable linebreak-style */
module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    it: true,
    describe: true,
    before: true,
  },
  rules: {
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 'off',
    'lines-between-class-members': ['error', { exceptAfterSingleLine: true }],
  },
};
