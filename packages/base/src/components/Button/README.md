# Mekar Button

## Installation
Install the component via NPM

```bash
yarn add mekar-button
```

## How to Use

### Import as Global Component
With this kind of import, you will include the whole bundle of the library, but you can use all components directly in Vue Instance.

```js
import { createApp } from 'vue'
import App from './App.vue'

// components
import Button from 'mekar-button'

const app = createApp(App)
app.use(Button)
app.mount('#app')
```

### Default Import
With this kind of import, you will only include component that've been imported.

```js
// components
import Button from 'mekar-button'
```

## Contribution
Everyone is welcome to contribute to Mekar Library
