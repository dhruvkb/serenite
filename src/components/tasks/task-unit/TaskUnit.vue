<template>
  <SereneFlip
    class="task-unit"
    :is-flipped="isFlipped">
    <template #front>
      <TaskView
        :task="task"
        @edit="handleEdit"/>
    </template>
    <template #back>
      <TaskInput
        :task="task"
        @done="handleDone">
        <template #icon>
          <SereneIcon
            name="edit"
            :path="icons.edit"/>
        </template>
      </TaskInput>
    </template>
  </SereneFlip>
</template>

<script>
  import { Task } from '@/store/support/models'

  import SereneIcon from '@/atoms/serene-icon/SereneIcon'
  import SereneFlip from '@/atoms/serene-flip/SereneFlip'

  import TaskInput from '@/components/tasks/task-input/TaskInput'
  import TaskView from '@/components/tasks/task-view/TaskView'

  import edit from '@/assets/icons/edit.svg'

  export default {
    name: 'TaskUnit',
    components: {
      SereneIcon,
      SereneFlip,

      TaskInput,
      TaskView
    },
    data () {
      return {
        isFlipped: false,
        icons: {
          edit
        }
      }
    },
    props: {
      task: {
        type: Task,
        required: true
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
    methods: {
      handleDone () {
        this.isFlipped = false
      },
      handleEdit () {
        this.isFlipped = true
      }
    }
  }
</script>

<style scoped lang="scss" src="./TaskUnit.scss"/>
