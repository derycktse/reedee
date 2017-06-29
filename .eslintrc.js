module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        // "quotes": [
        //     "error",
        //     "double"
        // ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": 1,

        /**
         * https://github.com/eslint/eslint/issues/6303
         * 'NewComponent' is defined but never used no-unused-vars
         */
        "react/jsx-uses-vars": [2]
    }
};