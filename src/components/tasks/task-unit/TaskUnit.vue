<template>
  <div
    class="task-unit"
    :class="classes">
    <button
      class="content"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
      <TaskCheckbox
        :is-focused="isMouseOver"
        :is-checked="task.isComplete"/>
      <span class="title">
        {{ task.title }}
      </span>
    </button>

    <div class="buttons">
      <SereneButton
        class="trash"
        @click.stop="handleDeleteClick">
        <SereneIcon
          name="trash"
          :path="icons.trash"/>
      </SereneButton>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import SereneButton from '@/atoms/serene-button/SereneButton'
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import TaskCheckbox from '@/components/tasks/task-checkbox/TaskCheckbox'

  import box from '@/assets/icons/box.svg'
  import check from '@/assets/icons/check.svg'
  import trash from '@/assets/icons/trash.svg'

  export default {
    name: 'TaskUnit',
    components: {
      TaskCheckbox,
      SereneButton,
      SereneIcon
    },
    data () {
      return {
        isMouseOver: false,
        icons: {
          box,
          check,
          trash
        }
      }
    },
    props: {
      taskId: {
        type: String,
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
      },
      /**
       * Get the task corresponding to the passed ID.
       */
      task () {
        return this.taskById(this.taskId)
      },

      ...mapGetters('todo', [
        'taskById'
      ])
    },
    methods: {
      /**
       * Invert the attribute describing whether the task has been completed.
       */
      toggleTaskCompletion () {
        this.updateTasks({
          mutation: 'setTaskCompletion',
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
      removeTask () {
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
      handleDeleteClick () {
        this.removeTask()
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

<style scoped lang="scss" src="./TaskUnit.scss"/>
