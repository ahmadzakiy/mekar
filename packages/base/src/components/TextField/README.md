# Mekar Text Field

## Installation
Install the component via NPM

```bash
yarn add mekar-text-field
```

## How to Use

### Import as Global Component
With this kind of import, you will include the whole bundle of the library, but you can use all components directly in Vue Instance.

```js
import { createApp } from 'vue'
import App from './App.vue'

// components
import TextField from 'mekar-text-field'

const app = createApp(App)
app.use(TextField)
app.mount('#app')
```

### Default Import
With this kind of import, you will only include component that've been imported.

```js
// components
import TextField from 'mekar-text-field'
```

## Contribution
Everyone is welcome to contribute to Mekar Library
