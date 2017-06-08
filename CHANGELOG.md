# v3.0.0

Introduction of [`prettier`](https://github.com/prettier/prettier) to the config.
At the same time update the base for this ruleset [eslint-config-airbnb](https://github.com/airbnb/javascript)

## The changes are smaller than they appear:

### One environment was removed:

- Remove `mocha` from `env` because this belongs into [eslint-config-signavio-test](https://github.com/signavio/eslint-config-signavio-test)

### Some rules are changed:

- [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign) now follows the `airbnb` style to always be an error
- [`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md) error instead of warning
- [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md) error instead of warning
- [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) error instead of warning

### Some rules are now checked by [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

- `dot-location`
- `no-multi-spaces`
- `wrap-iife`
- `comma-dangle`
- `no-extra-semi`
- `array-bracket-spacing`
- `block-spacing`
- `brace-style`
- `comma-spacing`
- `comma-style`
- `computed-property-spacing`
- `eol-last`
- `func-call-spacing`
- `indent`
- `jsx-quotes`
- `key-spacing`
- `keyword-spacing`
- `new-parens`
- `newline-per-chained-call`
- `no-mixed-spaces-and-tabs`
- `no-multiple-empty-lines`
- `no-spaced-func`
- `no-trailing-spaces`
- `no-whitespace-before-property`
- `object-curly-spacing`
- `object-property-newline`
- `one-var-declaration-per-line`
- `padded-blocks`
- `quote-props`
- `semi`
- `semi-spacing`
- `space-before-blocks`
- `space-before-function-paren`
- `space-in-parens`
- `space-infix-ops`
- `space-unary-ops`
- `unicode-bom`
- `arrow-parens`
- `arrow-spacing`
- `generator-star-spacing`
- `rest-spread-spacing`
- `template-curly-spacing`
- `yield-star-spacing`
- `jsx-closing-bracket-location`
- `jsx-curly-spacing`
- `jsx-indent-props`
- `jsx-max-props-per-line`
- `jsx-space-before-closing`
- `jsx-wrap-multilines`
- `jsx-first-prop-new-line`
- `jsx-equals-spacing`
- `jsx-indent`
- `flowtype/space-after-type-colon`
- `flowtype/space-before-type-colon`

### Some rules are special (see [eslint-config-prettier#special-rules](https://github.com/prettier/eslint-config-prettier#special-rules))

- `curly` `'error': 'multi-line'` because it will enforce braces if a block has multiple lines
  This will only trigger after `prettier` but is still considered useful
- `max-len` `'error'` to give hints about strings that might need manual splitting
- `no-tabs` We don't want any tabs in our code
