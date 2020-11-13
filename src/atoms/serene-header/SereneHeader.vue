<template>
  <header class="serene-header">
    <h1 class="heading">{{ heading }}</h1>
    <p class="subheading">{{ subheading }}</p>
  </header>
</template>

<script>
  export default {
    name: 'SereneHeader',
    props: {
      /**
       * the heading for the particular page
       *
       * This is displayed in big, bold and prominently-colored type and is the
       * focus of the page.
       */
      heading: {
        type: String,
        required: true
      },
      /**
       * the subheading for the particular page
       *
       * This is displayed in subdued-colored type and provides not-so-important
       * information.
       */
      subheading: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneHeader.scss"></style>
