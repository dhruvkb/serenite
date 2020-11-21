<template>
  <SereneCard
    @edit="handleEdit"
    @delete="handleDelete">
    <ColorPicker
      :color="label.colorKey"
      @pick="handlePick"/>
    <span class="name">
      {{ label.name }}
    </span>
  </SereneCard>
</template>

<script>
  import { mapMutations } from 'vuex'

  import { Label } from '@/store/support/models'

  import SereneCard from '@/atoms/serene-card/SereneCard'

  import ColorPicker from '@/components/labels/color-picker/ColorPicker'

  export default {
    name: 'LabelView',
    components: {
      SereneCard,

      ColorPicker
    },
    props: {
      label: {
        type: Label,
        required: true
      }
    },
    methods: {
      /**
       * Set a new color to represent the label.
       */
      updateLabelColorKey (colorKey) {
        this.editLabel({
          labelAttrs: {
            id: this.label.id,
            colorKey
          }
        })
      },
      /**
       * Remove the label altogether.
       */
      deleteLabel () {
        this.removeLabel({
          labelAttrs: {
            id: this.label.id
          }
        })
      },

      handlePick (colorKey) {
        this.updateLabelColorKey(colorKey)
      },
      handleEdit () {
        this.$emit('edit')
      },
      handleDelete () {
        this.deleteLabel()
      },

      ...mapMutations('todo', [
        'editLabel',
        'removeLabel'
      ])
    }
  }
</script>
