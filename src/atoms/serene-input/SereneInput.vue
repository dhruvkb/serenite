<template>
  <label class="serene-input" :class="sereneInputClasses">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      class="field"
      type="text"
      :value="text"
      @input="handleInput"/>
    <span class="label">
      <!-- @slot Icon goes here -->
      <slot name="icon"/>
    </span>
    <span
      class="enter"
      title="Press Enter to submit.">
      <Icon
        name="enter"
        :path="icons.enter"/>
    </span>
  </label>
</template>

<script>
  import Icon from '@/atoms/serene-icon/SereneIcon'

  import enter from '@/assets/icons/enter.svg'

  export default {
    name: 'SereneInput',
    components: { Icon },
    inheritAttrs: false,
    model: {
      prop: 'text',
      event: 'update'
    },
    data () {
      return {
        icons: {
          enter
        }
      }
    },
    props: {
      /**
       * the text to use as the content of the input field
       */
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Get the classes to apply on the SereneInput instance.
       *
       * @return {Array} an array of classes to apply on the element
       */
      sereneInputClasses () {
        return [
          {
            'is-filled': Boolean(this.text)
          }
        ]
      }
    },
    methods: {
      /**
       * Emit an `'update'` event with the value of the target input field as
       * the payload.
       *
       * @param {InputEvent} event - the event that triggered this handler
       */
      handleInput (event) {
        this.$emit('update', event.target.value)
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneInput.scss"/>
