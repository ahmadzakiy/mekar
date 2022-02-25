# Mekar Library

## Installation
Install the library via NPM

```bash
yarn add mekar-library
```

## How to Use

### Import as Global Component
With this kind of import, you will include the whole bundle of the library, but you can use all components directly in Vue Instance.

```js
import Vue from 'vue'
import App from './App.vue'

// components
import Lib from 'mekar-library'

// style
import 'mekar-library/dist/mekar.css'

Vue.use(Lib)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### Selective Import
With this kind of import, you will include the whole bundle of the library, unless your app have `treeshake` config.

```js
// components
import { Button } from 'mekar-library'

// style
import 'mekar-library/dist/bundle.css'
```

## Contribution
Everyone is welcome to contribute to Mekar Library
