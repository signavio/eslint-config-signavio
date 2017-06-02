# eslint-config-signavio

This package provides the agreed-upon set of JavaScript linting rules for all JavaScript projects at Signavio.
The rule set is based upon the linting rules employed at [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

First install this package as a `devDependency` in your project.

```shell
npm install --save-dev eslint-config-signavio
```

or

```shell
yarn add -D eslint-config-signavio
```

After that create a `.eslintrc.js` file and add the following:

```json
{
  "extends": "signavio"
}
```

## Contributing

We encourage everybody to start discussions and file PRs with changes to this rule set.
However please always make a good point, why you want to introduce a change.
Simply "not liking" something doesn't count.

# Changelog

## v2.1.0

Introduction of [`prettier`](https://github.com/prettier/prettier) to the config.
At the same time update the base for this ruleset [eslint-config-airbnb](https://github.com/airbnb/javascript)

### The changes are smaller than they appear:

#### One environment was removed:

- Remove `mocha` from `env` because this belongs into [eslint-config-signavio-test](https://github.com/signavio/eslint-config-signavio-test)

#### Some rules are changed:

- [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign) now follows the `airbnb` style to always be an error
- [`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md) error instead of warning
- [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md) error instead of warning
- [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) error instead of warning

#### Some rules are now checked by [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

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

#### Some rules are special (see [eslint-config-prettier#special-rules](https://github.com/prettier/eslint-config-prettier#special-rules))

- `max-len` `'error'` to give hints about strings that might need splitting
- `no-mixed-operators` `off` because `prettier` formats those non-trivial

### Open Questions that need an answer

- `no-mixed-operators` should we turn this rule on somehow?
- [`no-use-before-define`](http://eslint.org/docs/rules/no-use-before-define) was turned to `error` (old config does not work anymore, any change needed?)
- were `"jsx-a11y/onclick-has-focus": "off"` and `"jsx-a11y/onclick-has-role": "off"` replaced with `"jsx-a11y/interactive-supports-focus": "error"`?
- a few new jsx-a11y errors were added to the `airbnb` config; what to do with these?
 - `jsx-a11y/no-noninteractive-element-interactions`
 - `jsx-a11y/accessible-emoji`
 - `jsx-a11y/aria-activedescendant-has-tabindex`
 - `jsx-a11y/iframe-has-title`
 - `jsx-a11y/no-autofocus`
 - `jsx-a11y/no-redundant-roles`
 - `jsx-a11y/media-has-caption`
 - `jsx-a11y/no-interactive-element-to-noninteractive-role`
 - `jsx-a11y/no-noninteractive-element-to-interactive-role`
 - `jsx-a11y/no-noninteractive-tabindex`
