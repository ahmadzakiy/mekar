import TextField from './TextField'
import { SIZE } from './type'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: 'select',
      options: SIZE
    },
    onClick: {
      action: 'click'
    },
    onFocus: {
      action: 'focus'
    },
    onBlur: {
      action: 'blur'
    },
    'onUpdate:modelValue': {
      action: 'update'
    },
  },
};

const Template = (args) => ({
  components: {
    TextField
  },
  setup() {
    return { args }
  },
  template: '<TextField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  id: 'name',
  type: 'text',
  size: 'medium',
  placeholder: 'John Doe',
  label: 'Fill your name',
}
