<template>
  <div class="task-checkbox" :class="classes">
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
      }
    }
  }
</script>

<style scoped lang="scss" src="./TaskCheckbox.scss"/>
