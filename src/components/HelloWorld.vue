<template>
  <div class="hello_world">
    <svg height="128" width="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <use href="@/assets/balance.svg#balance"/>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted () {
      browser.runtime.sendMessage({})
    },
    computed: {
      defaultText () {
        return browser.i18n.getMessage('extName')
      }
    }
  }
</script>

<style scoped lang="scss">
  .hello_world {
    color: #333333;
  }
</style>
