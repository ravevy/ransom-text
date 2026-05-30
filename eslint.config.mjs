import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...tseslint.configs.recommended,
  ...storybook.configs["flat/recommended"],
  { ignores: ["dist/**", "storybook-static/**"] },
]);

export default eslintConfig;
