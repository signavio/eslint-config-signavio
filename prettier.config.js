module.exports = {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    overrides: [
        {
            files: 'package.json',
            options: { tabWidth: 2, parser: 'json' },
        },
    ],
}
