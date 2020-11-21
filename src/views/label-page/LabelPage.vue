<template>
  <div class="label-page">
    <Status/>
    <LabelInput>
      <template #icon>
        <SereneIcon
          name="label"
          :path="icons.label"/>
      </template>
    </LabelInput>
    <LabelList/>
  </div>
</template>

<script>
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import Status from '@/components/labels/status/Status'
  import LabelInput from '@/components/labels/label-input/LabelInput'
  import LabelList from '@/components/labels/label-list/LabelList'

  import label from '@/assets/icons/label.svg'

  export default {
    name: 'LabelPage',
    components: {
      LabelList,
      SereneIcon,

      LabelInput,
      Status
    },
    data () {
      return {
        icons: {
          label
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./LabelPage.scss"></style>
