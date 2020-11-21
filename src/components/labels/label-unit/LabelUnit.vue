<template>
  <SereneFlip
    class="label-unit"
    :is-flipped="isFlipped">
    <template #front>
      <LabelView
        :label="label"
        @edit="handleEdit"/>
    </template>
    <template #back>
      <LabelInput
        :label="label"
        @done="handleDone">
        <template #icon>
          <SereneIcon
            name="edit"
            :path="icons.edit"/>
        </template>
      </LabelInput>
    </template>
  </SereneFlip>
</template>

<script>
  import { Label } from '@/store/support/models'

  import SereneIcon from '@/atoms/serene-icon/SereneIcon'
  import SereneFlip from '@/atoms/serene-flip/SereneFlip'

  import LabelInput from '@/components/labels/label-input/LabelInput'
  import LabelView from '@/components/labels/label-view/LabelView'

  import edit from '@/assets/icons/edit.svg'

  export default {
    name: 'TaskUnit',
    components: {
      SereneIcon,
      SereneFlip,

      LabelInput,
      LabelView
    },
    data () {
      return {
        isFlipped: false,
        icons: {
          edit
        }
      }
    },
    props: {
      label: {
        type: Label,
        required: true
      }
    },
    methods: {
      handleDone () {
        this.isFlipped = false
      },
      handleEdit () {
        this.isFlipped = true
      }
    }
  }
</script>

<style scoped lang="scss" src="./LabelUnit.scss"/>
