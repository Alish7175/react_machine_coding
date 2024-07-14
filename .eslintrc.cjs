module.exports = {
  root: true,
  env: { browser: true,
  es2021: true,
  jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    semi: "error",
    "line-comment-position": "error",
    "no-use-before-define": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": ["off"],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx", ".js"] }]
  },
  "settings": {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  }
}
