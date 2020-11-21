<template>
  <div
    class="task-view"
    :class="classes">
    <button
      class="content"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @focus="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @blur="handleMouseLeave">
      <TaskCheckbox
        :is-focused="isMouseOver"
        :is-checked="task.isComplete"/>
      <span class="title">
        {{ task.title }}
      </span>
    </button>

    <div class="buttons">
      <SereneButton
        class="edit"
        @click.stop="handleEditClick">
        <SereneIcon
          name="edit"
          :path="icons.edit"/>
      </SereneButton>
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
  import { mapActions } from 'vuex'

  import { Task } from '@/store/support/models'

  import SereneButton from '@/atoms/serene-button/SereneButton'
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import TaskCheckbox from '@/components/tasks/task-checkbox/TaskCheckbox'

  import box from '@/assets/icons/box.svg'
  import check from '@/assets/icons/check.svg'
  import edit from '@/assets/icons/edit.svg'
  import trash from '@/assets/icons/trash.svg'

  export default {
    name: 'TaskView',
    components: {
      SereneButton,
      SereneIcon,

      TaskCheckbox
    },
    data () {
      return {
        isMouseOver: false,
        icons: {
          box,
          check,
          edit,
          trash
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
      handleEditClick () {
        this.$emit('edit')
      },
      handleDeleteClick () {
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

<style scoped lang="scss" src="./TaskView.scss"/>
