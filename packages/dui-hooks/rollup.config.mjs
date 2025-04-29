import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import fs from 'fs';

// Read package.json to get version
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        banner: `/**
 * @dui/hooks v${pkg.version}
 *
 * @license ${pkg.license}
 * This source code is licensed under the ${pkg.license} license found in the
 * LICENSE file in the root directory of this source tree.
 */`,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
    external: ['react', 'react/jsx-runtime', 'clsx', 'tailwind-merge'],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
        banner: `/**
 * @dui/hooks v${pkg.version}
 *
 * @license ${pkg.license}
 */`,
      },
    ],
    plugins: [dts()],
  },
]);
