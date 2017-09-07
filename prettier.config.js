const prettierConfig = {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
}

module.exports = Object.assign({}, prettierConfig, {
    overrides: [
        {
            files: 'package.json',
            options: { tabWidth: 2, parser: 'json' },
        },
    ],
    prettierConfig,
})
