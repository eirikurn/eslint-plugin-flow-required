# eslint-plugin-flow-header

Check existance of flow header comment.

**NOTE**: This package is deprecated in favor of the [`require-valid-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation) rule in [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-flow-header`:

```
$ npm install eslint-plugin-flow-header --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-flow-header` globally.

## Usage

### Recommended configuration

Add `flow-header` to your `.eslintrc` configuration file by extending the `recommended` configuration. The recommended config just adds the `flow-header` rule to your configuration.

```json
{
  "extends": [
    "plugin:flow-header/recommended"
  ],
  "plugins": [
  	"flow-header"
  ]
}
```

### Add Eslint Rule

You can also add the rule manually by using flow-header as a plugin. Add `flow-header` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "flow-header"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "flow-header/flow-header": 2
    }
}
```

## Supported Rules

* [flow-header](docs/rules/flow-header.md)
