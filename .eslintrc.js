module.exports = {
  "parser": "@typescript-eslint/parser",
  "ignorePatterns": [
    "typings.d.ts"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
  ],
  "rules": {
    "react/prop-types": "off",
    "no-control-regex": 0,
  }
}
