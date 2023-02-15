module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': 'warn',
    'default-param-last': 'warn',
    'no-console': 'warn',
    'no-param-reassign': 'warn',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'prefer-arrow-callback': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-uses-react': 'off',
    'react/no-unused-class-component-methods': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
};
