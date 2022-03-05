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
import { createApp } from 'vue'
import App from './App.vue'

// components
import Lib from 'mekar-library'

const app = createApp(App)
app.use(Lib)
app.mount('#app')
```

### Selective Import
With this kind of import, you will include the whole bundle of the library, unless your app have `treeshake` config.

```js
// components
import { Button } from 'mekar-library'
```

## Contribution
Everyone is welcome to contribute to Mekar Library
