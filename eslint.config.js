import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

// For prod:
// 1. Remove tseslint.configs.recommended and replace with this
// ...tseslint.configs.recommendedTypeChecked,
// Alternatively, use this for stricter rules
// ...tseslint.configs.strictTypeChecked,
// Optionally, add this for stylistic rules
// ...tseslint.configs.stylisticTypeChecked,
// 2. Add parserOptions to languageOptions:
// parserOptions: {
//     project: ["./tsconfig.node.json", "./tsconfig.app.json"],
//     tsconfigRootDir: import.meta.dirname,
// }

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      //tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      // ...tseslint.configs.strictTypeChecked,
      // ...tseslint.configs.stylisticTypeChecked,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
