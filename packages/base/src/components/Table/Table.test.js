import { mount } from '@vue/test-utils'
import TextField from './Table'

describe('Component: Table', () => {
  let instance

  const propsObj = {
    data: [],
    columnTitle: [],
    size: 'medium',
    isStriped: false
  }

  beforeEach(() => {
    instance = mount(TextField)
  })

  afterEach(() => {
    instance.unmount()
  })

  it('Should be named Table', () => {
    expect(instance.vm.$options.name).toBe('Table')
  })

  it('Should match snapshot', async () => {
    await instance.setProps({
      columnTitle: ['name', 'age'],
      data: [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
      ]
    })

    expect(instance.element).toMatchSnapshot()
  })

  it('Should have default props', () => {
    expect(instance.props()).toEqual(propsObj)
  })

  it('Should render data correctly', async () => {
    await instance.setProps({
      columnTitle: ['name', 'age'],
      data: [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
      ]
    })

    expect(instance.findAll('th').length).toBe(2)
    expect(instance.findAll('th')[0].text()).toBe('Name')
    expect(instance.findAll('th')[1].text()).toBe('Age')

    expect(instance.findAll('td').length).toBe(6)
    expect(instance.findAll('td')[0].text()).toBe('A')
    expect(instance.findAll('td')[1].text()).toBe('1')
    expect(instance.findAll('td')[2].text()).toBe('B')
    expect(instance.findAll('td')[3].text()).toBe('2')
    expect(instance.findAll('td')[4].text()).toBe('C')
    expect(instance.findAll('td')[5].text()).toBe('3')
  })

  it('Should sort data correctly',  async () => {
    await instance.setProps({
      columnTitle: ['name', 'age'],
      data: [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
      ]
    })
    await instance.setData({
      sortOrders: {
        name: 1,
        age: 1
      }
    })

    expect(instance.findAll('td').length).toBe(6)
    expect(instance.findAll('td')[0].text()).toBe('A')
    expect(instance.findAll('td')[1].text()).toBe('1')

    await instance.findAll('th')[0].trigger('click')

    expect(instance.findAll('td')[0].text()).toBe('C')
    expect(instance.findAll('td')[1].text()).toBe('3')
  })
})
