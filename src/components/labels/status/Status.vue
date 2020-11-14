<template>
  <SereneHeader
    heading="Labels"
    :subheading="labelMessage"/>
</template>

<script>
  import { mapGetters } from 'vuex'

  import SereneHeader from '@/atoms/serene-header/SereneHeader'

  export default {
    name: 'Status',
    components: {
      SereneHeader
    },
    computed: {
      /**
       * Get the count of all currently defined labels.
       *
       * @return {number} the number of labels defined
       */
      labelCount () {
        return this.allLabels.length
      },
      /**
       * Get a message describing the count of the currently described labels,
       * while also handling pluralisation.
       *
       * @return {string} a message describing the number of labels defined
       */
      labelMessage () {
        if (this.labelCount === 0) {
          return 'No labels'
        } else if (this.labelCount === 1) {
          return '1 label'
        } else {
          return `${this.labelCount} labels`
        }
      },

      ...mapGetters('todo', [
        'allLabels'
      ])
    }
  }
</script>
