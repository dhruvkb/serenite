<template>
  <SereneCard
    class="task-view"
    :class="classes"
    :style="styles"
    :is-disabled="task.isComplete"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @focus="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @blur="handleMouseLeave"
    @edit="handleEdit"
    @delete="handleDelete">
    <TaskCheckbox
      :color="isLabelled ? label.colorKey : null"
      :is-focused="isMouseOver"
      :is-checked="task.isComplete"/>
    <span class="title">
      <span
        v-for="(word, index) in task.title.split(' ')"
        :key="index"
        class="word"
        :class="wordClasses(word)">
        {{ word }}
      </span>
    </span>
  </SereneCard>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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
      /**
       * Get the classes to apply on the task view.
       *
       * @return {Array} an array of classes to apply on the element
       */
      classes () {
        return [
          {
            'is-complete': this.task.isComplete
          }
        ]
      },
      /**
       * Get the styles to apply on the task view.
       *
       * @return {Object} an object of styles to apply on the element
       */
      styles () {
        if (this.isLabelled) {
          return {
            '--view-color': this.label.colorCode
          }
        } else {
          return {}
        }
      },

      /**
       * Get whether this task has a label associated with it.
       *
       * @return {boolean} whether this task has an associated label
       */
      isLabelled () {
        return this.label !== undefined
      },

      /**
       * Get the `Label` instance associated with this task.
       *
       * @return {Label} the label associated with this task
       */
      label () {
        return this.task.label(this.labels)
      },

      ...mapGetters('todo', [
        'labels'
      ])
    },
    methods: {
      /**
       * Get the classes to apply on every word in the task title.
       *
       * @return {Array} an array of classes to apply on the element
       */
      wordClasses (word) {
        return [
          {
            'is-label': this.isLabelled && word === `#${this.label.name}`
          }
        ]
      },

      /**
       * Set the new completion status of the task.
       */
      updateTaskIsComplete (isComplete) {
        this.updateTasks({
          mutation: 'editTask',
          data: {
            taskAttrs: {
              id: this.task.id,
              isComplete
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
        this.updateTaskIsComplete(!this.task.isComplete)
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

<style scoped lang="scss" src="./TaskView.scss"/>
