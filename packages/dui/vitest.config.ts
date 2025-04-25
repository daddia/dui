import {defineConfig} from 'vitest/config';
import {uiConfig} from '@repo/vitest-config/ui';

export default defineConfig({
  ...uiConfig,
  test: {
    ...uiConfig.test,
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
  },
});
