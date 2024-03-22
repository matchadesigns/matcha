module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    // Additional rules or overrides can be added here
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
