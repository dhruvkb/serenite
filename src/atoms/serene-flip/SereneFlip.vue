<template>
  <div class="serene-flip">
    <div
      class="card"
      :class="classes">
      <div class="front face">
        <!-- @slot Back side content goes here -->
        <slot name="front"/>
      </div>
      <div class="back face">
        <!-- @slot Front side content goes here -->
        <slot name="back"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SereneFlip',
    props: {
      /**
       * whether the reverse side is facing up
       */
      isFlipped: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to apply on the flip view.
       *
       * @return {Array} an array of classes to apply on the element
       */
      classes () {
        return [
          {
            'is-flipped': this.isFlipped
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneFlip.scss"/>
