const path = require('path');

module.exports = {
  env: {
    amd: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, './tsconfig.eslint.json'),
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi-line'],
    'eol-last': 'error',
    'indent': ['error', 2],
    'key-spacing': 'error',
    'max-len': ['error', { code: 140 }],
    'max-params': ['error', 3],
    'no-cond-assign': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: 'export' },
      { blankLine: 'always', next: 'return', prev: '*' },
    ],
    quotes: ['error', 'single'],
    semi: 'error',
    'sort-keys': ['error', 'asc'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
  },
};
