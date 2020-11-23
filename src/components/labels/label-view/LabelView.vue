<template>
  <SereneCard
    @edit="handleEdit"
    @delete="handleDelete">
    <ColorPicker v-model="color"/>
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
    computed: {
      /**
       * Get the color key associated with the label. This wrapper also enables
       * `v-model` to set the value via a Vuex mutation.
       */
      color: {
        get () {
          return this.label.colorKey
        },
        set (value) {
          this.updateLabelColorKey(value)
        }
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
