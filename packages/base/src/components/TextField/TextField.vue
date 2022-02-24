<template>
  <label
    class="label"
    :for="id"
  >
    {{ label }}
  </label>
  <input
    v-bind="$attrs"
    class="input"
    :class="classes"
    :name="id"
    :value="modelValue"
    :disabled="isDisabled"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
  >
</template>

<script>
  import { SIZE } from './type'

  export default {
    name: 'TextField',
    version: '1.0.0',
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
    computed: {
      classes() {
        let list = []

        if (this.isDisabled) {
          list.push('is-disabled')
        }

        if (this.isError) {
          list.push('is-error')
        }

        if (this.isFocused) {
          list.push('is-focused')
        }

        return list
      },
      theme() {
        let height, padding

        if(this.size === 'small') {
          height = '36px'
          padding = '0px 12px'
        } else {
          height = '44px'
          padding = '0px 20px'
        }

        return {
          height,
          padding,
        }
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

<style scoped>
  .label {
    display: block;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .input {
    position: relative;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    box-shadow: none;
    letter-spacing: normal;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    height: v-bind('theme.height');
    padding: v-bind('theme.padding');
    background: #ffffff;
    /*border-radius: 8px;*/
    border: 2px solid #d6d6d6;
    transition: all .2s ease-in-out;
  }

  .input:hover {
    border-color: #2572b7;
  }

  .input::placeholder {
    color: #8d8d8d;
  }

  .is-focused {
    border-color: #2572b7;
  }

  .is-error {
    border-color: #ec0c0c;
  }

  .is-error:hover {
    border-color: #ec0c0c;
  }

  .is-disabled {
    cursor: not-allowed;
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    color: #b6b6b6;
  }

  .is-disabled:hover {
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    color: #b6b6b6;
  }
</style>

