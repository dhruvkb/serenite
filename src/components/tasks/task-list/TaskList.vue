<template>
  <SereneList
    v-model="tasksWrapped"
    class="task-list">
    <template #default="props">
      <TaskUnit
        :key="props.item.id"
        :task="props.item"/>
    </template>
    <template #no-list>
      <svg
        class="balance"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg">
        <use href="@/assets/balance.svg#balance"/>
      </svg>
      <p>Take a deep breath and unwind.</p>
    </template>
  </SereneList>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import SereneList from '@/atoms/serene-list/SereneList'

  import TaskUnit from '@/components/tasks/task-unit/TaskUnit'

  export default {
    name: 'TaskList',
    components: {
      SereneList,

      TaskUnit
    },
    computed: {
      /**
       * Get the list of all tasks. This wrapper also enables `v-model` to
       * update the orders of the tasks via a Vuex mutation.
       */
      tasksWrapped: {
        get () {
          return this.allTasks
        },
        set (value) {
          const orderedIds = value.map(task => task.id)
          this.allTasks.forEach(task => {
            const newOrder = orderedIds.indexOf(task.id)
            if (task.order !== newOrder) {
              this.updateTaskOrder(task.id, newOrder)
            }
          })
        }
      },

      ...mapGetters('todo', [
        'allTasks'
      ])
    },
    methods: {
      /**
       * Set the new order of the task.
       *
       * @param {string} taskId - the ID of the task to reorder
       * @param {number} taskOrder - the new order of the task
       */
      updateTaskOrder (taskId, taskOrder) {
        this.updateTasks({
          mutation: 'editTask',
          data: {
            taskAttrs: {
              id: taskId,
              order: taskOrder
            }
          }
        })
      },

      ...mapActions('todo', [
        'updateTasks'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./TaskList.scss"/>
