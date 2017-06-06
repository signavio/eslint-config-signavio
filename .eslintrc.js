module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    env: {
        browser: true,
    },
    plugins: ['prettier', 'flowtype'],
    rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
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
