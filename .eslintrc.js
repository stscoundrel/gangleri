module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    fetch: true,
  },
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
  },
};
