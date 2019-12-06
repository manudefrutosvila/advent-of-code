module.exports = {
	env: {
		es6: true,
		node: true
	},
	ignorePatterns: ['node_modules/', 'coverage/'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'off',
			{
				accessibility: 'explicit'
			}
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				FunctionDeclaration: {
					parameters: 'first'
				},
				FunctionExpression: {
					parameters: 'first'
				}
			}
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-use-before-declare': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': ['off', 'as-needed'],
		camelcase: 'error',
		// TODO: 'capitalized-comments': 'error',
		'comma-dangle': 'off',
		complexity: 'off',
		'constructor-super': 'error',
		curly: 'off',
		'dot-notation': 'off',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'id-blacklist': ['error', 'any'],
		'id-match': 'error',
		'import/no-deprecated': 'warn',
		'import/no-internal-modules': 'off',
		'import/order': 'error',
		'max-classes-per-file': ['error', 1],
		'max-len': [
			'error',
			{
				code: 120
			}
		],
		'new-parens': 'error',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': [
			'error',
			{
				allow: [
					'log',
					'dirxml',
					'warn',
					'error',
					'dir',
					'timeLog',
					'assert',
					'clear',
					'count',
					'countReset',
					'group',
					'groupCollapsed',
					'groupEnd',
					'table',
					'Console',
					'markTimeline',
					'profile',
					'profileEnd',
					'timeline',
					'timelineEnd',
					'timeStamp',
					'context'
				]
			}
		],
		'no-debugger': 'error',
		'no-empty': 'off',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-invalid-this': 'off',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{
				hoist: 'all'
			}
		],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		// 'no-underscore-dangle': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-arrow/prefer-arrow-functions': 'error',
		'prefer-const': 'error',
		'quote-props': 'off',
		radix: 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never'
			}
		],
		'spaced-comment': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'off',
		'@typescript-eslint/tslint/config': [
			'error',
			{
				rules: {
					'import-blacklist': [true, 'rxjs/Rx'],
					'import-spacing': true,
					'jsdoc-format': true,
					'no-redundant-jsdoc': true,
					'no-reference-import': true,
					'one-line': [true, 'check-open-brace', 'check-catch', 'check-else', 'check-whitespace'],
					whitespace: [true, 'check-branch', 'check-decl', 'check-operator', 'check-separator', 'check-type']
				}
			}
		]
	}
};
