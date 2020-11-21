<template>
  <div class="override">
    <transition
      :name="transitionName"
      mode="out-in">
      <LabelPage
        v-if="currentOption === 'Labels'"
        key="label-page"/>
      <TaskPage
        v-else
        key="task-page"/>
    </transition>
    <footer>
      <SereneTabs
        :options="options"
        v-model="currentOption"/>
    </footer>
  </div>
</template>

<script>
  import SereneTabs from '@/atoms/serene-tabs/SereneTabs'

  import '@/styles/base.scss'

  export default {
    name: 'App',
    components: {
      SereneTabs,

      TaskPage: () => import(/* webpackChunkName: 'task-page' */ '@/views/task-page/TaskPage'),
      LabelPage: () => import(/* webpackChunkName: 'label-page' */ '@/views/label-page/LabelPage')
    },
    data () {
      return {
        currentOption: 'Tasks',
        options: [
          'Tasks',
          'Labels'
        ],

        transitionName: null
      }
    },
    watch: {
      currentOption (newValue, oldValue) {
        const baseTransitionName = 'slide'
        if (this.options.indexOf(newValue) > this.options.indexOf(oldValue)) {
          this.transitionName = `${baseTransitionName}-right`
        } else {
          this.transitionName = `${baseTransitionName}-left`
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./App.scss"/>
