module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['error'],
    'react/destructuring-assignment': [
      2,
      'always',
      {
        ignoreClassFields: true
      }
    ],
    'react/no-array-index-key': 2,
    'react/no-unused-state': 0,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ],
    'no-nested-ternary': 2,
    semi: [2, 'always'],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: true
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any'
      }
    ],
    code: 120,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ]
  }
};
