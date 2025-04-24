import { repoPrettierConfig } from "@repo/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...repoPrettierConfig,
  plugins: [
    "prettier-plugin-tailwindcss",
  ],
};

export default config