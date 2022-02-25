import Button from './components/Button'
import Table from './components/Table'
import TextField from './components/TextField'

const components = [
  Button,
  Table,
  TextField
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  Button,
  Table,
  TextField,
}

export default install
