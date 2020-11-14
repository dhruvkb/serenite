<template>
  <SereneInput
    v-model="taskTitle"
    placeholder="Today I will..."
    @keyup.enter="handleSubmit">
    <template #icon>
      <Icon
        name="rocket"
        :path="icons.rocket"/>
    </template>
  </SereneInput>
</template>

<script>
  import { mapActions } from 'vuex'

  import Icon from '@/atoms/serene-icon/SereneIcon'
  import SereneInput from '@/atoms/serene-input/SereneInput'

  import rocket from '@/assets/icons/rocket.svg'

  export default {
    name: 'TaskInput',
    components: {
      Icon,
      SereneInput
    },
    data () {
      return {
        taskTitle: '',
        icons: {
          rocket
        }
      }
    },
    methods: {
      /**
       * Create a task with the title typed into the input field.
       */
      addTask () {
        this.updateTasks({
          mutation: 'addTask',
          data: {
            taskAttrs: {
              title: this.taskTitle
            }
          }
        })
        this.taskTitle = '' // Clear field after submission
      },

      handleSubmit () {
        this.addTask()
      },

      ...mapActions('todo', [
        'updateTasks'
      ])
    }
  }
</script>
