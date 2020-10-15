import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main, format: 'cjs',
      },
      {
        file: pkg.module, format: 'esm',
      },
    ],
    plugins: [
      del({
        targets: ['dist/*'],
      }),
      typescript(),
      resolve(),
      commonjs(),
      filesize(),
      image({
        limit: 130000,
      }),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {
      }),
      ...Object.keys(pkg.peerDependencies || {
      }),
    ],
  },
];
