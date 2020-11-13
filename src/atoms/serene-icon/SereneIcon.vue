<template>
  <svg
    class="icon"
    viewBox="0 0 512 512">
    <use :href="href"/>
  </svg>
</template>

<script>
  export default {
    name: 'SereneIcon',
    props: {
      /**
       * the name of the icon
       *
       * This is the ID of the group to be used from the SVG.
       */
      name: {
        type: String,
        required: true
      },
      /**
       * the path to the icon
       *
       * This is the URL as obtained from the webpack loaders with the use of
       * `import` or `require` statements.
       */
      path: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Get the hyperlink to the group ID to be used from the SVG. It is
       * expressed as a string of the form `path#id`.
       *
       * @return {string} the path to the SVG group to be used in the icon
       */
      href () {
        return `${this.path}#${this.name}`
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneIcon.scss"/>
