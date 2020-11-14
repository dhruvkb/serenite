<template>
  <div class="label-page">
    <Status/>
    <p>Work in progress!</p>
  </div>
</template>

<script>
  import Status from '@/components/labels/status/Status'

  export default {
    name: 'LabelPage',
    components: {
      Status
    }
  }
</script>

<style scoped lang="scss" src="./LabelPage.scss"></style>
