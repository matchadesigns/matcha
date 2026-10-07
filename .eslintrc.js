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
    // Props are not typed in this codebase
    "react/prop-types": "off",
    // Allow omitting props from a ...rest spread
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    // theme-ui sx prop
    "react/no-unknown-property": ["error", { ignore: ["sx"] }],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
