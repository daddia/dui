import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { createRequire } from 'module';

// Get package.json data
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

// Collect all dependencies as external
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'react/jsx-runtime',
];

// Create a multi-entry configuration for JS/TS files
const createRollupConfig = (input, output) => ({
  input,
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
    exports: 'named',
  },
  external,
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      preferBuiltins: true,
      alias: {
        '@': './src'
      }
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: false,
      clean: true,
    }),
  ],
});

// Create individual entries for each file
const jsEntries = {
  index: 'src/index.ts',
  'components/index': 'src/components/index.ts',
};

// Type definitions config
const dtsConfig = {
  input: jsEntries,
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external,
  plugins: [dts()],
};

export default [
  // ESM build only
  createRollupConfig(jsEntries),
  // Type definitions
  dtsConfig,
];
