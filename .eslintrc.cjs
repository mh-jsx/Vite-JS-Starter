module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:json/recommended",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.json"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-duplicate-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/button-has-type": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "warn",
    "react/display-name": "warn",
    "react/no-unstable-nested-components": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "warn",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        // don"t want to sort import lines, use eslint-plugin-import instead
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],

    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
};
