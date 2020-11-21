<template>
  <div
    class="serene-card"
    :class="classes">
    <button
      v-on="$listeners"
      class="content">
      <!-- @slot Content goes here -->
      <slot/>
    </button>

    <div class="buttons">
      <SereneButton
        class="edit"
        @click="handleEditClick">
        <SereneIcon
          name="edit"
          :path="icons.edit"/>
      </SereneButton>
      <SereneButton
        class="trash"
        @click="handleDeleteClick">
        <SereneIcon
          name="trash"
          :path="icons.trash"/>
      </SereneButton>
    </div>
  </div>
</template>

<script>
  import SereneButton from '@/atoms/serene-button/SereneButton'
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import edit from '@/assets/icons/edit.svg'
  import trash from '@/assets/icons/trash.svg'

  export default {
    name: 'SereneCard',
    components: {
      SereneButton,
      SereneIcon
    },
    data () {
      return {
        icons: {
          edit,
          trash
        }
      }
    },
    props: {
      isDisabled: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to apply on the card.
       *
       * @return {Array} an array of classes to apply on the element
       */
      classes () {
        return [
          {
            'is-disabled': this.isDisabled
          }
        ]
      }
    },
    methods: {
      handleEditClick () {
        this.$emit('edit')
      },
      handleDeleteClick () {
        this.$emit('delete')
      }
    }
  }
</script>

<style scoped lang="scss" src="./SereneCard.scss"/>
