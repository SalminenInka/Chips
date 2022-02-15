module.exports = {
  extends: 'airbnb-base',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  globals: {
    it: true,
    describe: true,
  },
  rules: {
    'no-cond-assign': [2, 'except-parens'],
    // 'no-console': 'off',
    'lines-between-class-members': [
      'error', 'always', { exceptAfterSingleLine: true },
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/extensions': 0,
  },
};
