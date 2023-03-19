module.exports = {
  extends: ["turbo", "prettier", "plugin:@builder.io/mitosis/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@builder.io/mitosis/css-no-vars": "error",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@builder.io/mitosis"],
};
