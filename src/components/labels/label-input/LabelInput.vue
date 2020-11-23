<template>
  <SereneInput
    v-model="labelName"
    placeholder="File this under..."
    @keyup.enter="handleEnter"
    @keyup.esc="handleEscape">
    <template #icon>
      <!-- @slot Icon goes here -->
      <slot name="icon"/>
    </template>
  </SereneInput>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'

  import { Label } from '@/store/support/models'

  import SereneInput from '@/atoms/serene-input/SereneInput'

  export default {
    name: 'LabelInput',
    components: {
      SereneInput
    },
    data () {
      return {
        labelName: ''
      }
    },
    props: {
      /**
       * the label to edit using this input field
       */
      label: {
        type: Label
      }
    },
    computed: {
      /**
       * Get whether the input field is linked to a label. The presence of a
       * linked label determines whether the field is opened in edit mode or
       * create mode.
       */
      isPopulated () {
        return this.label !== undefined
      }
    },
    methods: {
      /**
       * If a label is provided, update the given label with the new name typed
       * into the input field. If not, create a label with the name typed into
       * the input field.
       */
      performChange () {
        if (this.labelName === '') {
          if (this.isPopulated) {
            this.labelName = this.label.name
          }
          return // Do nothing if the field is blank
        }

        const data = {
          labelAttrs: {
            name: this.labelName
          }
        }
        if (this.isPopulated) {
          data.labelAttrs.id = this.label.id
          this.renameLabel({
            oldName: this.label.name,
            newName: this.labelName
          })
          this.editLabel(data) // Edit the given label
        } else {
          this.addLabel(data) // Create a new label
          this.labelName = '' // Clear field after creating the label
        }
      },

      handleEnter () {
        this.performChange()
        this.$emit('done')
      },
      handleEscape () {
        this.$emit('done')
      },

      ...mapMutations('todo', [
        'addLabel',
        'editLabel'
      ]),
      ...mapActions('todo', [
        'renameLabel'
      ])
    },
    mounted () {
      if (this.isPopulated) {
        this.labelName = this.label.name
      }
    }
  }
</script>
