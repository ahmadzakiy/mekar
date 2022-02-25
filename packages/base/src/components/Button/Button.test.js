import { shallowMount } from '@vue/test-utils'
import Button from './Button'

describe('Component: Button', () => {
  let instance

  const propsObj = {
    variation: 'primary',
    size: 'medium',
    isDisabled: false,
  }

  beforeEach(() => {
    instance = shallowMount(Button, {
      slots: {
        default: 'Submit',
      },
    })
  })

  afterEach(() => {
    instance.unmount()
  })

  it('Should be named Button', () => {
    expect(instance.vm.$options.name).toBe('Button')
  })

  it('Should have class bl-button', () => {
    expect(instance.find('button').classes()).toContain('button')
  })

  it('Should match snapshot', () => {
    expect(instance.element).toMatchSnapshot()
  })

  it('Should have default props correctly', () => {
    expect(instance.props()).toEqual(propsObj)
  })

  it('Should render button text correctly', () => {
    expect(instance.find('button').text()).toBe('Submit')
  })

  it('Should handle theme correctly', async () => {
    await instance.setProps({
      variation: 'primary',
      size: 'medium',
    })

    expect(instance.vm.theme).toEqual({
      backgroundColor: '#2572b7',
      color: '#ffffff',
      height: '44px',
      padding: '0px 20px',
    })

    await instance.setProps({
      variation: 'secondary',
      size: 'small',
    })

    expect(instance.vm.theme).toEqual({
      backgroundColor: '#ebebeb',
      color: '#3d3d3d',
      height: '36px',
      padding: '0px 12px',
    })
  })

  it('Should render disabled state correctly', async () => {
    await instance.setProps({
      isDisabled: true,
    })
    expect(instance.classes()).toContain('is-disabled')

    await instance.trigger('click')
    expect(instance.emitted()).not.toHaveProperty('click')
  })

  it('Should emit click correctly', async () => {
    await instance.trigger('click')
    expect(instance.emitted()).toHaveProperty('click')
  })
})
