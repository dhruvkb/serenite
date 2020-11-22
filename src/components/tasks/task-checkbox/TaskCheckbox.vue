<template>
  <div
    class="task-checkbox"
    :class="classes"
    :style="styles">
    <SereneIcon
      class="check"
      name="check"
      :path="icons.check"/>
    <SereneIcon
      class="box"
      name="box"
      :path="icons.box"/>
  </div>
</template>

<script>
  import { Label } from '@/store/support/models'

  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import check from '@/assets/icons/check.svg'
  import box from '@/assets/icons/box.svg'

  export default {
    name: 'TaskCheckbox',
    components: {
      SereneIcon
    },
    data () {
      return {
        icons: {
          check,
          box
        }
      }
    },
    props: {
      /**
       * the key of the chosen color
       */
      color: {
        type: String
      },
      /**
       * whether the checkbox is in user focus
       */
      isFocused: {
        type: Boolean,
        default: false
      },
      /**
       * whether the checkbox is checked
       */
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * Get the classes to apply on the task checkbox.
       *
       * @return {Array} an array of classes to apply on the element
       */
      classes () {
        return [
          {
            'is-focused': this.isFocused,
            'is-checked': this.isChecked
          }
        ]
      },
      /**
       * Get the styles to apply on the task checkbox.
       *
       * @return {Object} an object of styles to apply on the element
       */
      styles () {
        return {
          '--checkbox-color': Label.COLOR_CODES[this.color]
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./TaskCheckbox.scss"/>
