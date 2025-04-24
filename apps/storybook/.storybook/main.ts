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
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/dui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
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

    // Disable optimization for node_modules
    config.optimizeDeps = {
      ...config.optimizeDeps,
      disabled: true
    };

    // Add all dependencies as external
    config.ssr = {
      ...config.ssr,
      noExternal: [],
    };

    // Use a simpler approach: exclude all node_modules from bundling
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = [
      /^node_modules\/.*/,
      /^@storybook\/.*/,
      /^@swc\/.*/,
      /^tailwind.*/,
      'tailwind-merge',
      '@storybook/instrumenter'
    ];

    return config;
  },
};
export default config;
