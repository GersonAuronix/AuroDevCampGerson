import globals from "globals";


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module'
    }
  },
];