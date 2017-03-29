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
    'mocha',
  ],
  rules: {
    // always-multiline because it's makes re-ordering lines easier
    'comma-dangle': ['error', 'always-multiline'],

    // write semicolons only if necessary, not always
    semi: [2, 'never'],

    // better readability for nested function calls
    'space-in-parens': 0,

    // to allow defining internal helper functions after the exported objects
    'no-use-before-define': 0,

    // better readability for props
    'react/jsx-curly-spacing': 0,

    // no error because of wrapper components
    'react/prop-types': 1,

    // allow reassigning a variable in the test of a while or do...while loop
    'no-cond-assign': ['error', 'except-parens'],

    // enclosing complex expressions by parentheses excluding math operators
    'no-mixed-operators': ['error',
      {
        allowSamePrecedence: true,
      },
    ],

    // render above everything-else, so it can be found more easily
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ],
    }],

    // must have parens when using Flow annotations for parameters
    'arrow-parens': ['error', 'always'],

    // don't use .jsx extensions
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],

    // only warn to allow committing unfinished modules that are going to have multiple exports
    'import/prefer-default-export': 'warn',

    // use import/no-duplicate-imports over eslint core rule, as it distinguishes Flow type imports
    'no-duplicate-imports': 0,
    'import/no-duplicates': 1,

    'flowtype/define-flow-type': 1,
    'flowtype/require-parameter-type': 1,
    'flowtype/space-after-type-colon': [1, 'always'],
    'flowtype/space-before-type-colon': [1, 'never'],
    'flowtype/use-flow-type': 1,

    // exclusive test exection, like with `describe.only`, should never be committed
    'mocha/no-exclusive-tests': 'error',
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
