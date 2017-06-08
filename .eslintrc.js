module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    env: {
        browser: true,
    },
    plugins: ['prettier', 'flowtype'],
    rules: {
        // `off` to allow defining internal helper functions after the exported objects
        'no-use-before-define': 'off',
        // `off` in order to avoid defining all props on wrapper components
        'react/prop-types': 'warn',
        // allow reassigning a variable in the test of a while or do...while loop
        'no-cond-assign': ['error', 'except-parens'],
        // `warn` to allow unfinished modules that will have multiple exports
        'import/prefer-default-export': 'warn',
        // don't use .jsx extensions
        'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
        // render above everything-else, so it can be found more easily
        'react/sort-comp': [
            'warn',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    'render',
                    'everything-else',
                ],
            },
        ],
        // flowtype specific warnings
        'flowtype/define-flow-type': 'warn',
        'flowtype/require-parameter-type': 'warn',
        'flowtype/use-flow-type': 'warn',

        // eslint-config-prettier rules that might cause problems
        // see: https://github.com/prettier/eslint-config-prettier#special-rules
        curly: ['error', 'multi-line'],
        'max-len': [
            'error',
            80,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-tabs': 'error',

        // eslint-plugin-prettier rules
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
}
