import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unescaped entity warnings
      "react/no-unescaped-entities": "off",
      
      // Disable unused vars warnings
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable img element warnings
      "@next/next/no-img-element": "off"
    }
  }
];

export default eslintConfig;