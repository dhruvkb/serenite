<template>
  <div class="task-unit">
    <transition
      appear
      :name="transitionName"
      mode="out-in">
      <TaskView
        v-if="state === 'view'"
        :task="task"
        @edit="handleEdit"/>
      <TaskInput
        v-else
        :task="task"
        @done="handleDone">
        <template #icon>
          <SereneIcon
            name="edit"
            :path="icons.edit"/>
        </template>
      </TaskInput>
    </transition>
  </div>
</template>

<script>
  import { Task } from '@/store/support/models'

  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import TaskView from '@/components/tasks/task-view/TaskView'
  import TaskInput from '@/components/tasks/task-input/TaskInput'

  import edit from '@/assets/icons/edit.svg'

  export default {
    name: 'TaskUnit',
    components: {
      SereneIcon,

      TaskInput,
      TaskView
    },
    data () {
      return {
        state: 'view',
        states: [
          'view',
          'edit'
        ],

        transitionName: 'flip-up',

        icons: {
          edit
        }
      }
    },
    props: {
      task: {
        type: Task
      }
    },
    computed: {
      classes () {
        return [
          {
            'is-complete': this.task.isComplete
          }
        ]
      }
    },
    watch: {
      state (newValue, oldValue) {
        const baseTransitionName = 'flip'
        if (this.states.indexOf(newValue) > this.states.indexOf(oldValue)) {
          this.transitionName = `${baseTransitionName}-up`
        } else {
          this.transitionName = `${baseTransitionName}-down`
        }
      }
    },
    methods: {
      handleDone () {
        this.state = 'view'
      },
      handleEdit () {
        this.state = 'edit'
      }
    },
    created () {
      if (this.task === undefined) {
        this.state = 'edit'
      }
    }
  }
</script>

<style scoped lang="scss" src="./TaskUnit.scss"/>
