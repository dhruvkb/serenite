<template>
  <div class="label-list">
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="allLabels.length"
        key="list"
        class="list">
        <LabelUnit
          v-for="label in allLabels"
          :key="label.id"
          :label="label"/>
      </div>
      <div
        v-else
        key="no-org"
        class="no-org">
        <p class="advice">
          Use labels to organise your tasks.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import LabelUnit from '@/components/labels/label-unit/LabelUnit'

  export default {
    name: 'LabelList',
    components: {
      LabelUnit
    },
    computed: {
      ...mapGetters('todo', [
        'allLabels'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./LabelList.scss"/>
