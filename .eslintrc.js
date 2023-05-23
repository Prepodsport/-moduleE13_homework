module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        quotes: ["error", "double"],  // Использовать двойные кавычки.
        semi: ["error", "always"],  // Всегда добавлять точку с запятой в конце утверждения.
        indent: ["error", 4],  // Отступ — это четыре пробела.
    "no-console": "off"  // Избегать использования в коде методов на консоли (`console`). Dsrk
    }
}
