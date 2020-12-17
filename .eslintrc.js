module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'always' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    camelcase: 'error',
    curly: 'error',
    eqeqeq: 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'new-cap': 'error',
    'no-shadow': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'sort-keys': 'error',
    'spaced-comment': 'error',
  },
}
