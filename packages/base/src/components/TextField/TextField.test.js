import { shallowMount } from '@vue/test-utils'
import TextField from './TextField'

describe('Component: TextField', () => {
  let instance

  const propsObj = {
    id: '',
    modelValue: '',
    size: 'medium',
    label: '',
    isDisabled: false,
    isError: false
  }

  beforeEach(() => {
    instance = shallowMount(TextField)
  })

  afterEach(() => {
    instance.unmount()
  })

  it('Should be named TextField', () => {
    expect(instance.vm.$options.name).toBe('TextField')
  })

  it('Should have class input', () => {
    expect(instance.find('input').classes()).toContain('input')
  })

  it('Should match snapshot', () => {
    expect(instance.element).toMatchSnapshot()
  })

  it('Should have default props', () => {
    expect(instance.props()).toEqual(propsObj)
  })

  it('Should handle theme correctly', async () => {
    await instance.setProps({
      size: 'medium',
    })

    expect(instance.vm.theme).toEqual({
      height: '44px',
      padding: '0px 20px',
    })

    await instance.setProps({
      size: 'small',
    })

    expect(instance.vm.theme).toEqual({
      height: '36px',
      padding: '0px 12px',
    })
  })

  it('Should render disabled state correctly', async () => {
    await instance.setProps({
      isDisabled: true
    })

    expect(instance.find('input').classes()).toContain('is-disabled')
    expect(instance.find('input').element.disabled).toBeTruthy()
  })

  it('Should render error state correctly', async () => {
    await instance.setProps({
      isError: true
    })

    expect(instance.find('input').classes()).toContain('is-error')
  })

  it('Should render label correctly correctly',  async () => {
    await instance.setProps({
      label: 'label'
    })

    expect(instance.find('label').text()).toBe('label')
  })

  it('Should handle input value correctly', async () => {
    expect(instance.find('input').element.value).toBe('')
    await instance.find('input').setValue('my@mail.com')
    expect(instance.find('input').element.value).toBe('my@mail.com')
  })

  it('Should emit event correctly',  async () => {
    await instance.find('input').trigger('click')
    expect(instance.emitted()).toHaveProperty('click')

    await instance.find('input').trigger('focus')
    expect(instance.emitted()).toHaveProperty('focus')

    await instance.find('input').trigger('blur')
    expect(instance.emitted()).toHaveProperty('blur')
  })
})
