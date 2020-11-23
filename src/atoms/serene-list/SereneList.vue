<template>
  <div class="serene-list">
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="listWrapped.length"
        key="list"
        class="list">
        <Draggable
          v-model="listWrapped"
          v-bind="draggableProps"
          :class="draggableClasses"
          @start="handleStart"
          @end="handleEnd">
          <!-- @slot An individual item of the list goes here -->
          <slot
            v-for="item in listWrapped"
            :item="item"/>
        </Draggable>
      </div>
      <div
        v-else
        key="no-list"
        class="no-list">
        <!-- @slot Content to show when no list goes here -->
        <slot name="no-list"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import Draggable from 'vuedraggable'

  export default {
    name: 'SereneList',
    model: {
      prop: 'list',
      event: 'reorder'
    },
    components: {
      Draggable
    },
    data () {
      return {
        isDragging: false,
        draggableProps: {
          animation: 200,
          disabled: false,
          ghostClass: 'is-ghosted',
          handle: '.handle'
        }
      }
    },
    props: {
      /**
       * the list to render with drag and drop support
       */
      list: {
        type: Array,
        required: true
      }
    },
    computed: {
      /**
       * Get the classes to apply on the draggable component.
       *
       * @return {Array} an array of classes to apply on the element
       */
      draggableClasses () {
        return [
          {
            'is-dragging': this.isDragging
          }
        ]
      },

      /**
       * Get the list render with drag and drop support. This wrapper also
       * enables `v-model` to set the value as the event name is not known.
       */
      listWrapped: {
        get () {
          return this.list
        },
        set (value) {
          this.$emit('reorder', value)
        }
      }
    },
    methods: {
      handleStart () {
        this.isDragging = true
      },
      handleEnd () {
        this.isDragging = false
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneList.scss"/>
