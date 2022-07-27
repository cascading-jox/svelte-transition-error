module.exports = {
    root: true,
    plugins: ['svelte3'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // 'id-match': ['error', '^[a-z][a-z0-9]*([A-Z]+[a-z0-9]+)*$'],
        'import/extensions': ['error', 'ignorePackages', {
            mjs: 'never',
            jsx: 'never',
        }],
        'no-case-declarations': 'warn',
        // camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }],
        camelcase: 'error',
        'no-console': 'warn',
        'arrow-body-style': 'warn',
        'no-bitwise': 'warn',
        'no-shadow': 'warn',
        'no-param-reassign': 'warn',
        curly: 'error',
        'nonblock-statement-body-position': ['error', 'below'],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }, {
            allowSingleLineBlocks: false,
        }],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 'first',
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 'first',
                body: 1,
            },
            FunctionExpression: {
                parameters: 'first',
                body: 1,
            },
            CallExpression: {
                arguments: 'first',
            },
            ArrayExpression: 'first',
            ObjectExpression: 'first',
            ImportDeclaration: 'first',
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false,
        }],
        'no-plusplus': 'off',
        'no-mixed-operators': 'off',
        'operator-linebreak': ['error', 'after', { overrides: { '=': 'none' } }],
        'no-continue': 'off',
        'no-multiple-empty-lines': 'off',
        'guard-for-in': 'warn',
        'prefer-destructuring': ['warn', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: false,
            },
        }, {
            enforceForRenamedProperties: false,
        }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        radix: ['error', 'as-needed'],
    },
};
