"use strict";

module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: "eslint:recommended",
	rules: {
		"array-callback-return": "warn",
		"comma-style": ["warn", "last"],
		eqeqeq: "warn",
		"function-paren-newline": ["warn", "never"],
		"no-console": "warn",
		"no-var": "error",
		"prefer-const": "error",
		quotes: ["warn", "double", {"avoidEscape":true, "allowTemplateLiterals":true}],
		semi: ["error", "always"],
		strict: "error",
	},
};