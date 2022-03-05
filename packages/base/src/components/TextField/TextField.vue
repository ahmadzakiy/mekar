<template>
  <StyledLabel :for="id">
    {{ label }}
  </StyledLabel>
  <StyledInput
    v-bind="$attrs"
    :name="id"
    :value="modelValue"
    :size="size"
    :disabled="isDisabled"
    :is-disabled="isDisabled"
    :is-error="isError"
    :is-focus="isFocused"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
  />
</template>

<script>
  import { StyledLabel, StyledInput } from './TextField.styled'
  import { SIZE } from './type'

  export default {
    name: 'TextField',
    components: {
      StyledLabel,
      StyledInput
    },
    inheritAttrs: false,
    props: {
      /**
       * Field id
       */
      id: {
        type: String,
        default: ''
      },
      /**
       * Use for v-model
       */
      modelValue: {
        type: [Number, String],
        default: ''
      },
      /**
       * Size of text field
       * @values medium, small
       */
      size: {
        type: String,
        default: 'medium',
        validator: value => SIZE.includes(value)
      },
      /**
       * Label for field
       */
      label: {
        type: String,
        default: ''
      },
      /**
       * Whether show disable state or not
       */
      isDisabled: {
        type: Boolean,
        default: false
      },
      /**
       * Whether show error state or not
       */
      isError: {
        type: Boolean,
        default: false
      },
    },
    emits: ['update:modelValue', 'click', 'blur', 'focus'],
    data() {
      return {
        isFocused: false
      }
    },
    methods: {
      handleInput(event) {
        /**
         * Triggers when value selected changes
         *
         * @event update:value
         * @type {object}
         * @arg value return event target value
         */
        this.$emit('update:modelValue', event.target.value)
      },
      handleClick(event) {
        /**
         * Triggers when dropdown clicked
         *
         * @event clicked
         * @type {object}
         * @arg event return event object
         */
        this.$emit('click', event)
      },
      handleBlur(event) {
        this.isFocused = false

        /**
         * Triggers when dropdown on blur
         *
         * @event blur
         * @type {object}
         * @arg event return event object
         */
        this.$emit('blur', event)
      },
      handleFocus(event) {
        this.isFocused = true

        /**
         * Triggers when dropdown on focus
         *
         * @event focus
         * @type {object}
         * @arg event return event object
         */
        this.$emit('focus', event)
      },
    }
  }
</script>


