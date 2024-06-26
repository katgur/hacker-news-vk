module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@conarti/feature-sliced/recommended",
  ],
  ignorePatterns: [".yarn", "build", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/prop-types": 0,
  },
};
