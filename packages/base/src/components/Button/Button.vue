<template>
  <button
    class="button"
    :class="{'is-disabled': isDisabled}"
    @click="handleClick"
  >
    <!-- @slot Use slot for text -->
    <slot />
  </button>
</template>

<script>
  import { VARIATION, SIZE } from './type'
  import { color as colorValue } from '@mekar/token/src/token'

  export default {
    name: 'Button',
    version: '1.0.0',
    props: {
      /**
       * Variation of the button
       * @values primary, secondary
       */
      variation: {
        type: String,
        default: 'primary',
        validator: value => VARIATION.includes(value)
      },
      /**
       * Size of the button
       * @values medium, small
       */
      size: {
        type: String,
        default: 'medium',
        validator: value => SIZE.includes(value)
      },
      /**
       * Whether the button is disabled or not
       */
      isDisabled: {
        type: Boolean,
        default: false
      },
    },
    emits: ['click'],
    computed: {
      theme() {
        const { white, blue60, gray10, gray80 } = colorValue
        let height, padding, color, backgroundColor

        if(this.size === 'small') {
          height = '36px'
          padding = '0px 12px'
        } else {
          height = '44px'
          padding = '0px 20px'
        }

        if(this.variation === 'primary') {
          color = white
          backgroundColor = blue60
        } else if(this.variation === 'secondary') {
          color = gray80
          backgroundColor = gray10
        }


        return {
          height,
          padding,
          color,
          backgroundColor
        }
      }
    },
    methods: {
      handleClick(event) {
        if (this.isDisabled) {
          return
        }

        /**
         * Triggers when the button clicked
         *
         * @event click
         * @type {object}
         * @arg event return event object
         */
        this.$emit('click', event)
      }
    }
  }
</script>

<style scoped>
  .button {
    cursor: pointer;
    height: v-bind('theme.height');
    padding: v-bind('theme.padding');
    /*border-radius: 8px;*/
    border: 1px solid transparent;
    text-decoration: none;
    outline: none;
    color: v-bind('theme.color');
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    background-color: v-bind('theme.backgroundColor');
    transition: all .2s ease-in-out;
  }

  .button:hover {
    background-color: v-bind('theme.backgroundColor');
  }

  .is-disabled {
    cursor: not-allowed;
    background-color: #f2f2f2;
    color: #b6b6b6;
  }

  .is-disabled:hover {
    background-color: #f2f2f2;
    color: #b6b6b6;
  }
</style>
