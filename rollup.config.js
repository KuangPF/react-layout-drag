import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.tsx',
    plugins: [
      resolve(),
      external(),
      postcss({
        plugins: [],
        minimize: true,
        sourceMap: 'inline'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      typescript()
    ],
    output: [{ dir: 'dist', format: 'es', sourcemap: true }]
  }
]
