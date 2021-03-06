module.exports = {
  "parserOptions": {
    "ecmaVersion": "2017",
    "sourceType": "module"
  },
  "env": {
    "node": true
  },
  "extends": ["eslint:recommended", "airbnb-base"],
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error",
  }
};
