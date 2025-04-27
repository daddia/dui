import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/dui/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  "framework": {
    "name": "@storybook/experimental-nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  "viteFinal": async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../../packages/dui/src'),
      };
    }

    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: ['styled-jsx/style'],
        },
      },
    };
  },
};
export default config;
