module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest"],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-unused-vars": 0,
    camelcase: 0,
    "lines-between-class-members": 0,
    "no-return-await": 0,
  },
};
