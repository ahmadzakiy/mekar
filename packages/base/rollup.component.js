import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import fileSize from 'rollup-plugin-filesize'
import css from 'rollup-plugin-css-only'
import componentList from './components.json'

const path = require('path');
const componentNames = Object.keys(componentList)
const buildConfigs = []

const independentComponent = (value) => {
  buildConfigs.push({
    input: componentList[value],
    output: [
      {
        file: `./src/components/${value}/dist/index.js`,
        format: 'es',
      }
    ],
    plugins: [
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
    ],
    external: ['vue', 'vue3-styled-components']
  })
}

componentNames.forEach(independentComponent)

export default buildConfigs

