module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/airbnb'],

  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'warn',
    'max-len': ['error', 120],
    'arrow-parens': 0,
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ]
};
