import Button from './Button'
import { VARIATION, SIZE } from './type'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot text',
    },
    variation: {
      control: 'select',
      options: VARIATION
    },
    size: {
      control: 'select',
      options: SIZE
    },
    onClick: {
      action: 'click'
    }
  },
};

const Template = (args) => ({
  components: {
    Button
  },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">{{ args.default }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  default: 'Submit',
  variation: 'primary',
  size: 'medium'
}
