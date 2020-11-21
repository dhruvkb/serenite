<template>
  <SereneInput
    v-model="taskTitle"
    class="task-input"
    placeholder="Today I will..."
    @keyup.enter="handleEnter"
    @keyup.esc="handleEscape">
    <template #icon>
      <!-- @slot Icon goes here -->
      <slot name="icon"/>
    </template>
  </SereneInput>
</template>

<script>
  import { mapActions } from 'vuex'

  import { Task } from '@/store/support/models'

  import SereneInput from '@/atoms/serene-input/SereneInput'

  export default {
    name: 'TaskInput',
    components: {
      SereneInput
    },
    data () {
      return {
        taskTitle: ''
      }
    },
    props: {
      /**
       * the task to edit using this input field
       */
      task: {
        type: Task
      }
    },
    computed: {
      /**
       * Get whether the input field is linked to a task. The presence of a
       * linked task determines whether the field is opened in edit mode or
       * create mode.
       */
      isPopulated () {
        return this.task !== undefined
      }
    },
    methods: {
      /**
       * If a task is provided, update the given task with the new title typed
       * into the input field. If not, create a task with the title typed into
       * the input field.
       */
      performChange () {
        if (this.taskTitle === '') {
          return // Do nothing if the field is blank
        }

        let mutation
        const data = {
          taskAttrs: {
            title: this.taskTitle
          }
        }
        if (this.isPopulated) {
          mutation = 'editTask' // Edit the given task
          data.taskAttrs.id = this.task.id
        } else {
          mutation = 'addTask' // Create a new task
        }

        this.updateTasks({
          mutation,
          data
        })

        if (mutation === 'addTask') {
          this.taskTitle = '' // Clear field after creating the task
        }
      },

      handleEnter () {
        this.performChange()
        this.$emit('done')
      },
      handleEscape () {
        this.$emit('done')
      },

      ...mapActions('todo', [
        'updateTasks'
      ])
    },
    mounted () {
      if (this.isPopulated) {
        this.taskTitle = this.task.title
      }
    }
  }
</script>
