<template>
  <SereneCard
    class="task-view"
    :class="classes"
    :is-disabled="task.isComplete"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @focus="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @blur="handleMouseLeave"
    @edit="handleEdit"
    @delete="handleDelete">
    <TaskCheckbox
      :is-focused="isMouseOver"
      :is-checked="task.isComplete"/>
    <span class="title">
      {{ task.title }}
    </span>
  </SereneCard>
</template>

<script>
  import { mapActions } from 'vuex'

  import { Task } from '@/store/support/models'

  import SereneCard from '@/atoms/serene-card/SereneCard'

  import TaskCheckbox from '@/components/tasks/task-checkbox/TaskCheckbox'

  export default {
    name: 'TaskView',
    components: {
      SereneCard,

      TaskCheckbox
    },
    data () {
      return {
        isMouseOver: false
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
      /**
       * Invert the attribute describing whether the task has been completed.
       */
      toggleTaskCompletion () {
        this.updateTasks({
          mutation: 'editTask',
          data: {
            taskAttrs: {
              id: this.task.id,
              isComplete: !this.task.isComplete
            }
          }
        })
      },
      /**
       * Remove the task altogether.
       */
      deleteTask () {
        this.updateTasks({
          mutation: 'removeTask',
          data: {
            taskAttrs: {
              id: this.task.id
            }
          }
        })
      },

      handleClick () {
        this.toggleTaskCompletion()
      },
      handleEdit () {
        this.$emit('edit')
      },
      handleDelete () {
        this.deleteTask()
      },
      handleMouseEnter () {
        this.isMouseOver = true
      },
      handleMouseLeave () {
        this.isMouseOver = false
      },

      ...mapActions('todo', [
        'updateTasks'
      ])
    }
  }
</script>
