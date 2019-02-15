# Check exitance of flow header comment. (flow-header)

Flow is a great static type checker for JavaScript. Unfortunately it's design
seems to assume that developers are slowly incorporating flow into large legacy
code bases, instead of starting fresh. This means that each file needs to opt
into type checking, otherwise obvious type errors may be missed.


## Rule Details

This rule aims to enforce that all js files have the flowtype header comment,
enforcing type checking across the project.

Examples of **incorrect** code for this rule:

```js

// Missing flow header comment.
var hello = 'world';

```

Examples of **correct** code for this rule:

```js

// @flow
var hello = 'world';

```

If you have individual files where Flow can not be used (such as in an
Isomorphic React Application with mixed Babel and non Babel code) you can turn
off flow for that one file with:

```js

// @noflow
var hello = 'world';

```

## Automatic fixing

The rule also supports `eslint --fix`. It adds a `// @flow` line to the top
of files that don't have it already.

## Further Reading

- https://flowtype.org/docs/new-project.html#typechecking-your-files
- https://github.com/facebook/flow/issues/284
