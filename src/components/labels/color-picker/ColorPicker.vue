<template>
  <div class="color-picker">
    <LabelSwatch
      v-for="(colorCode, colorKey) in colorCodes"
      :key="colorKey"
      :color="colorCode"
      :is-checked="colorKey === color"
      :title="colorNames[colorKey]"
      @click="handleClick(colorKey)"/>
  </div>
</template>

<script>
  import { Label } from '@/store/support/models'

  import LabelSwatch from '@/components/labels/label-swatch/LabelSwatch'

  export default {
    name: 'ColorPicker',
    components: {
      LabelSwatch
    },
    model: {
      prop: 'color',
      event: 'pick'
    },
    props: {
      /**
       * the key of the chosen color
       */
      color: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        colorNames: Label.COLOR_NAMES,
        colorCodes: Label.COLOR_CODES
      }
    },
    methods: {
      handleClick (color) {
        this.$emit('pick', color)
      }
    }
  }
</script>

<style scoped lang="scss" src="./ColorPicker.scss"/>
