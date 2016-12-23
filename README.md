# eslint-config-signavio

This package provides the agreed-upon set of JavaScript linting rules for all JavaScript projects at Signavio.
The rule set is based upon the linting rules employed at [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
Furthermore we adjusted it, to cater for [react](https://facebook.github.io/react/) and [flow](https://flowtype.org/) type checking.
You will find that we are not as strict as proposed by the original airbnb rule set.
This is due to the fact that large portions of linter rules are highly opinionated and we simply disagreed.

## Installation

First install this package as a `devDepdency` in your project.

```shell
npm install --save-dev eslint-config-signavio
```

After that create a `.eslintrc` file and add the following:

```json
{
  "extends": "signavio"
}
```

## Contributing

We encourage everybody to start discussions and file PRs with changes to this rule set.
However please always make a good point, why you want to introduce a change.
Simply "not-linking" something doesn't count.
