module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'new-cap': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
  },
};
