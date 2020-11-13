<template>
  <div class="tab-bar" :style="sereneTabsStyles">
    <button
      v-for="(option, index) in options"
      :key="index"
      class="tab"
      :class="sereneTabsTabClasses(index)"
      @click="handleClick(index)">
      {{ option }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SereneTabs',
    model: {
      prop: 'chosen',
      event: 'switch'
    },
    props: {
      /**
       * the list of options to present as tabs
       */
      options: {
        type: Array,
        validator: val => val.every(item =>
          typeof item === 'string' || item instanceof String
        ),
        required: true
      },
      /**
       * the chosen option, out of the list of options
       */
      chosen: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Get the CSS properties to apply on the SereneTabs instance.
       *
       * @return {Object} the CSS properties and values to set on the element
       */
      sereneTabsStyles () {
        return {
          '--tab-bar-index': this.options.indexOf(this.chosen)
        }
      }
    },
    methods: {
      /**
       * Get the classes to apply on any given tab in the panel.
       *
       * @param {number} index - the index of the tab being styled
       * @return {Array} an array of classes to apply on the element
       */
      sereneTabsTabClasses (index) {
        return [
          {
            'is-chosen': this.options[index] === this.chosen
          }
        ]
      },

      /**
       * Emit a `'switch'` event with the index of the target tab from the panel
       * as the payload.
       *
       * @param {number} index - the index of the tab that triggered this handler
       */
      handleClick (index) {
        this.$emit('switch', this.options[index])
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneTabs.scss"/>
