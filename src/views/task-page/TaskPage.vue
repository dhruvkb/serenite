<template>
  <div class="task-page">
    <Today/>
    <TaskInput>
      <template #icon>
        <SereneIcon
          name="rocket"
          :path="icons.rocket"/>
      </template>
    </TaskInput>
    <TaskList/>
  </div>
</template>

<script>
  import SereneIcon from '@/atoms/serene-icon/SereneIcon'

  import Today from '@/components/tasks/today/Today'
  import TaskList from '@/components/tasks/task-list/TaskList'
  import TaskInput from '@/components/tasks/task-input/TaskInput'

  import rocket from '@/assets/icons/rocket.svg'

  export default {
    name: 'TaskPage',
    components: {
      SereneIcon,

      Today,
      TaskInput,
      TaskList
    },
    data () {
      return {
        icons: {
          rocket
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./TaskPage.scss"/>
