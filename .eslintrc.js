const prettierConfig = require("./.prettierrc.js");

module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-console": "off",
    "no-use-before-define": ["error", { variables: false }],
    "prettier/prettier": ["error", prettierConfig],
    "prefer-template": 2,
  },
  plugins: ["prettier"],
};
