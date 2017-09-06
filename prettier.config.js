const prettierConfig = {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
}

module.exports = {
    ...prettierConfig,
    overrides: [
        {
            files: 'package.json',
            options: { tabWidth: 2, parser: 'json' },
        },
    ],
    prettierConfig,
}
