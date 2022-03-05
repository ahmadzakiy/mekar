import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
import fileSize from 'rollup-plugin-filesize'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'

const componentSource = {
  input: './src/index.js'
}

const plugins = [
  resolve({
    browser: true
  }),
  vue({
    template: {
      isProduction: true
    }
  }),
  css({ output: 'mekar.css' }),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  }),
  // minify({
  //   comments: false
  // }),
  fileSize()
]

export default Object.assign({}, componentSource, {
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
  ],
  plugins,
  external: ['vue', 'vue3-styled-components']
})
