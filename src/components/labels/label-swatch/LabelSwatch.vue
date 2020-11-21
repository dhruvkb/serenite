<template>
  <button
    v-on="$listeners"
    class="label-swatch"
    :class="classes"
    :style="styles">
    <SereneIcon
      class="box"
      name="box"
      :path="icons.box"/>
  </button>
</template>

<script>
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import check from '@/assets/icons/check.svg'
  import box from '@/assets/icons/box.svg'

  export default {
    name: 'LabelSwatch',
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
       * the color to present on the swatch
       */
      color: {
        type: String,
        required: true
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
       * Get the classes to apply on the label swatch.
       *
       * @return {Array} an array of classes to apply on the element
       */
      classes () {
        return [
          {
            'is-checked': this.isChecked
          }
        ]
      },
      /**
       * Get the styles to apply on the label swatch.
       *
       * @return {Object} an object of styles to apply on the element
       */
      styles () {
        return {
          '--swatch-color': this.color
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./LabelSwatch.scss"/>
