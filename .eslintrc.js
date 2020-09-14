module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        "no-unused-vars": "off",
        "semi": "off",
        "max-len": ["error", {
            "code": 120
        }],

        // typescript eslint rules
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": false
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false,
                "argsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": true,
                "ts-nocheck": true,
                "ts-check": false,
                "minimumDescriptionLength": 5
            }
        ],
        "@typescript-eslint/no-empty-function": [
            "error",
            { "allow": ["arrowFunctions"] }
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/prefer-as-const": "error",

        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",

        "@typescript-eslint/naming-convention": "off",
    },
};
