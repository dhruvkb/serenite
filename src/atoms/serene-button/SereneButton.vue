<template>
  <button
    v-on="$listeners"
    class="serene-button">
    <!-- @slot Content goes here -->
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'SereneButton'
  }
</script>

<style scoped lang="scss" src="./SereneButton.scss"/>
