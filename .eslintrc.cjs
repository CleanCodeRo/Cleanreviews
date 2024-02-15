/** @type {import('eslint').Config} */
module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true,
  },
  extends: [
      'eslint:recommended',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
};
