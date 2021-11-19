module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: [
    'node',
    'react'
  ],
  rules: {
  }
}
