<template>
  <div class="task-page">
    <Today/>
    <TaskInput/>
    <TaskList/>
  </div>
</template>

<script>
  import Today from '@/components/tasks/today/Today'
  import TaskList from '@/components/tasks/task-list/TaskList'
  import TaskInput from '@/components/tasks/task-input/TaskInput'

  export default {
    name: 'TaskPage',
    components: {
      Today,
      TaskInput,
      TaskList
    }
  }
</script>

<style scoped lang="scss" src="./TaskPage.scss"/>
