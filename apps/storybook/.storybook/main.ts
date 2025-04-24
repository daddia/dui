import type {StorybookConfig} from '@storybook/experimental-nextjs-vite';

import {join, dirname} from 'path';
import path from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-essentials'),
      options: {
        docs: false,
      },
    },
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/experimental-addon-test'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/experimental-nextjs-vite'),
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // Add any Vite config overrides here
    config.resolve = config.resolve || {};

    // Add extensions to resolve
    config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.json'];

    // Handle preserveSymlinks
    config.resolve.preserveSymlinks = true;

    // Add alias for the dui package
    config.resolve.alias = {
      ...config.resolve.alias,
      '@daddia/dui': path.resolve(__dirname, '../../../packages/dui/src'),
      '@daddia/dui/components/Button': path.resolve(__dirname, '../../../packages/dui/src/components/Button'),
    };

    // Set external dependencies
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = [
      '@storybook/core/csf',
      '@storybook/core/preview/runtime',
      '@storybook/addon-viewport/preview',
      '@swc/helpers/_/_interop_require_default',
      '@swc/helpers/_/_interop_require_wildcard',
      'tailwind-merge',
      /^@storybook\/.*/,
      /^@swc\/.*/,
      /^tailwind.*/
    ];

    return config;
  },
};
export default config;
