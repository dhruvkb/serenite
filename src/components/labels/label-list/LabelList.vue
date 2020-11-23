<template>
  <SereneList
    v-model="labelsWrapped"
    class="label-list">
    <template #default="props">
      <LabelUnit
        :key="props.item.id"
        :label="props.item"/>
    </template>
    <template #no-list>
      <p>Use labels to organise your tasks.</p>
    </template>
  </SereneList>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import SereneList from '@/atoms/serene-list/SereneList'

  import LabelUnit from '@/components/labels/label-unit/LabelUnit'

  export default {
    name: 'LabelList',
    components: {
      SereneList,

      LabelUnit
    },
    computed: {
      /**
       * Get the list of all labels. This wrapper also enables `v-model` to
       * update the orders of the labels via a Vuex mutation.
       */
      labelsWrapped: {
        get () {
          return this.allLabels
        },
        set (value) {
          const orderedIds = value.map(label => label.id)
          this.allLabels.forEach(label => {
            const newOrder = orderedIds.indexOf(label.id)
            if (label.order !== newOrder) {
              this.updateLabelOrder(label.id, newOrder)
            }
          })
        }
      },

      ...mapGetters('todo', [
        'allLabels'
      ])
    },
    methods: {
      /**
       * Set the new order of the label.
       *
       * @param {string} labelId - the ID of the label to reorder
       * @param {number} labelOrder - the new order of the label
       */
      updateLabelOrder (labelId, labelOrder) {
        this.editLabel({
          labelAttrs: {
            id: labelId,
            order: labelOrder
          }
        })
      },

      ...mapMutations('todo', [
        'editLabel'
      ])
    }
  }
</script>
