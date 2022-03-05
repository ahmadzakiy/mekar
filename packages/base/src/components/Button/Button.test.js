import { mount } from '@vue/test-utils'
import Button from './Button'

describe('Component: Button', () => {
  let instance

  const propsObj = {
    variation: 'primary',
    size: 'medium',
    isDisabled: false,
  }

  beforeEach(() => {
    instance = mount(Button, {
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

  it('Should match snapshot', () => {
    expect(instance.element).toMatchSnapshot()
  })

  it('Should have default props correctly', () => {
    expect(instance.props()).toEqual(propsObj)
  })

  it('Should render button text correctly', () => {
    expect(instance.find('button').text()).toBe('Submit')
  })

  it('Should render disabled state correctly', async () => {
    await instance.setProps({
      isDisabled: true,
    })

    await instance.trigger('click')
    expect(instance.emitted()).not.toHaveProperty('click')
  })

  it('Should emit click correctly', async () => {
    await instance.trigger('click')
    expect(instance.emitted()).toHaveProperty('click')
  })
})
