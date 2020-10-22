module.exports = {
  extends: ["standard"],
  plugins: ["standard", "react"],
  rules: {
    "no-var": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used" }],
    "arrow-spacing": ["error", { before: true, after: true }],
    indent: ["error", 2],
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],

    // options to emulate prettier setup
    semi: ["error", "always"],
    "max-len": ["error", { code: 200 }],
    "template-curly-spacing": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],

    // standard.js
    "space-before-function-paren": [
      "error",
      {
        named: "never",
        anonymous: "always",
        asyncArrow: "always",
      },
    ],

    // standard plugin - options
    "standard/object-curly-even-spacing": ["error", "either"],
    "standard/array-bracket-even-spacing": ["error", "either"],
    "standard/computed-property-even-spacing": ["error", "even"],
    "standard/no-callback-literal": ["error", ["cb", "callback"]],

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // mine
    "no-template-curly-in-string": "off",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}
