import Vue from 'vue'

import { Label, Task } from '@/store/support/models'

const state = {
  labels: {},
  tasks: {}
}

const getters = {
  allLabels: state => Object.keys(state.labels),
  labelById: state => id => state.labels[id],

  allTasks: state => Object.keys(state.tasks),
  taskById: state => id => state.tasks[id],

  pendingTaskCount: (state, getters) => getters.allTasks.filter(id => !getters.taskById(id).isComplete).length
}

const mutations = {
  addLabel (state, payload) {
    const { name, colorName } = payload.labelAttrs
    const label = new Label(name, colorName)
    Vue.set(state.labels, label.id, label)
  },
  removeLabel (state, payload) {
    const { id } = payload.taskAttrs
    Vue.delete(state.labels, id)
  },

  addTask (state, payload) {
    const { title } = payload.taskAttrs
    const task = new Task(title)
    Vue.set(state.tasks, task.id, task)
  },
  removeTask (state, payload) {
    const { id } = payload.taskAttrs
    Vue.delete(state.tasks, id)
  },
  setTaskCompletion (state, payload) {
    const { id, isComplete } = payload.taskAttrs
    const task = state.tasks[id]
    task.isComplete = isComplete
  }
}

const actions = {
  updateTasks ({ commit, getters }, payload) {
    commit(payload.mutation, payload.data)

    const count = getters.pendingTaskCount
    const text = count ? count.toString() : null
    browser.browserAction.setBadgeText({ text: text })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
