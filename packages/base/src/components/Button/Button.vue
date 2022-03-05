<template>
  <StyledButton
    :variation="variation"
    :size="size"
    :is-disabled="isDisabled"
    @click="handleClick"
  >
    <!-- @slot Use slot for text -->
    <slot />
  </StyledButton>
</template>

<script>
  import StyledButton from './Button.styled'
  import { VARIATION, SIZE } from './type'

  export default {
    name: 'Button',
    version: '1.0.0',
    components: {
      StyledButton
    },
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

