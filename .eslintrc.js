module.exports = {
  "extend": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "quotes": ["error", "single"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"]
  }
};
