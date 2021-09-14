module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "overrides": [
        {
            "files": ["*.ts"],
            "rules": {
                "spaced-comment": 2,
                "curly": 2,
                "eol-last": 2,
                "guard-for-in": 2,
                "no-extra-label": 2,
                "no-constant-condition": 0,
                "max-len": [2, { "code": 180 }],
                "indent": [2, 4, { "SwitchCase": 1 }],
                "@typescript-eslint/no-var-requires": 0,
                "@typescript-eslint/no-non-null-assertion": 0,
                "@typescript-eslint/explicit-member-accessibility": [2, { "overrides": { "constructors": "off" } }],
                "@typescript-eslint/member-ordering": [
                    2,
                    {
                        "default": [
                            "static-field",
                            "instance-field",
                            "static-method",
                            "instance-method",
                        ],
                    },
                ],
                "no-caller": 2,
                "no-bitwise": 2,
                "no-console": [2, { "allow": ["log", "warn", "error"] }],
                "no-debugger": 2,
                "no-shadow": 2,
                "@typescript-eslint/no-dupe-class-members": 2,
                "no-empty": 2,
                "no-eval": 2,
                "@typescript-eslint/no-inferrable-types": 2,
                "dot-notation": 2,
                "no-trailing-spaces": 2,
                "no-unused-expressions": 2,
                "no-var": 2,
                "brace-style": 2,
                "quotes": [2, "double", { "avoidEscape": true }],
                "radix": 2,
                "semi": 2,
                "comma-dangle": [2, "always-multiline"],
                "eqeqeq": [2, "always", { "null": "ignore" }],   
            }
        },
    ],
};
