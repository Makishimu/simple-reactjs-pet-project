module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      rules: {
        quotes: ["error", "single"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react-hooks/exhaustive-deps": 0,
    "react-hooks/rules-of-hooks": 0,
    "@next/next/no-img-element": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "linebreak-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-types": "off",
    "lines-between-class-members": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-shadow": 0,
    "react/no-danger": 0,
    "react/prop-types": [0],
    "max-len": [
      error,
      {
        code: 200,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    "react/destructuring-assignment": 0,
    camelcase: "off",
    "@typescript-eslint/camelcase": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-props-no-spreading": [
      2,
      {
        custom: "ignore",
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
