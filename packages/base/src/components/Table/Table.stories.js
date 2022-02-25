import Table from './Table'
import { SIZE } from './type'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    size: {
      control: 'select',
      options: SIZE
    },
  },
};

const Template = (args) => ({
  components: {
    Table
  },
  setup() {
    return { args }
  },
  template: '<Table v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  columnTitle: ['name', 'age', 'club'],
  data: [
    { name: 'Cristiano Ronaldo', age: 37, club: 'Manchester United' },
    { name: 'Lionel Messi', age: 34, club: 'Paris Saint-Germain' },
    { name: 'Neymar Jr', age: 30, club: 'Paris Saint-Germain' },
    { name: 'Kylian Mbappe', age: 23, club: 'Paris Saint-Germain' },
    { name: 'Mohamed Salah', age: 29, club: 'Liverpool' },
  ]
}
