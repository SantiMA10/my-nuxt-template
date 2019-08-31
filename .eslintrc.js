module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
