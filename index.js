module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  },
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    // write semicolons only if necessary, not always
    semi: [2, 'never'],
    // better readability for nested function calls
    'space-in-parens': 0,
    // to allow rest destructing with unused vars
    'no-unused-vars': ['warn', { vars: 'local', args: 'after-used' }],
    // better readability for props
    'react/jsx-curly-spacing': 0,
    // no error because of wrapper components
    'react/prop-types': 1,
    // render above everything-else
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ],
    }],
  },
}
