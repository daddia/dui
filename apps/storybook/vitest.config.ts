import { defineConfig, mergeConfig, coverageConfigDefaults } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

import { uiConfig } from '@repo/vitest-config/ui';

export default mergeConfig(
  uiConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // The location of your Storybook config, main.js|ts
        configDir: path.join(dirname, '.storybook'),
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'yarn storybook --ci',
      }),
    ],
    test: {
      // Enable browser mode
      browser: {
        enabled: true,
        name: 'chromium',
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
      },
      coverage: {
        // 👇 Add this
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/.storybook/**',
          // 👇 This pattern must align with the `stories` property of your `.storybook/main.ts` config
          '**/*.stories.*',
          // 👇 This pattern must align with the output directory of `storybook build`
          '**/storybook-static/**',
        ],
      },
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  }),
);
