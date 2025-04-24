import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve         from '@rollup/plugin-node-resolve';
import commonjs        from '@rollup/plugin-commonjs';
import typescript      from 'rollup-plugin-typescript2';
import dts             from 'rollup-plugin-dts';

export default [
  // Compile TS/JS into CJS & ESM
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // Avoid bundling your peer deps (react, radix, etc.)
      peerDepsExternal(),
      // Locate modules using Node resolution algorithm
      resolve(),
      // Convert CommonJS modules to ES6
      commonjs(),
      // Compile TypeScript and emit .d.ts alongside JS
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
        clean: true,
      }),
    ],
  },

  // Bundle only .d.ts files
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/types/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
  },
];
