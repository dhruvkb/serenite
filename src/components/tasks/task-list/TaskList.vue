<template>
  <div class="task-list">
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="allTasks.length"
        key="list"
        class="list">
        <TaskUnit
          v-for="task in allTasks"
          :key="task.id"
          :task-id="task"/>
      </div>
      <div
        v-else
        key="day-off"
        class="day-off">
        <svg
          class="balance"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg">
          <use href="@/assets/balance.svg#balance"/>
        </svg>
        <p class="advice">
          Take a deep breath and unwind.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import TaskUnit from '@/components/tasks/task-unit/TaskUnit'

  export default {
    name: 'TaskList',
    components: {
      TaskUnit
    },
    computed: {
      ...mapGetters('todo', [
        'allTasks'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./TaskList.scss"/>
