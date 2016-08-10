module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
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
    'flowtype',
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
    
    'flowtype/define-flow-type': 1,
    'flowtype/require-parameter-type': 1,
    'flowtype/space-after-type-colon': [1, "always"],
    'flowtype/space-before-type-colon': [1, "never"],
    "flowtype/use-flow-type": 1,
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
}
