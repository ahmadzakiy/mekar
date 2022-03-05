import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import fileSize from 'rollup-plugin-filesize'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'

const path = require('path');
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
  json(),
  commonjs(),
  getBabelOutputPlugin({
    configFile: path.resolve(__dirname, 'babel.config.js')
  }),
  terser(),
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
