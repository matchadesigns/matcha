module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-fragments': [1, 'element'],
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-pascal-case': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
