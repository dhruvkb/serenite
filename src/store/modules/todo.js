import Vue from 'vue'

import { Label, Task } from '@/store/support/models'

const state = {
  labels: {}, // id: string -> label: POJO<Label>
  tasks: {} // id: string -> task: POJO<Task>
}

const getters = {
  allLabels: state => Object.values(state.labels)
    .map(labelPojo => new Label(labelPojo))
    .sort((a, b) => a.compare(b)),

  allTasks: state => Object.values(state.tasks)
    .map(taskPojo => new Task(taskPojo))
    .sort((a, b) => a.compare(b)),
  pendingTaskCount: (state, getters) => getters.allTasks
    .filter(task => !task.isComplete).length
}

const baseMutations = {
  add (Klass, kind, state, attrs) {
    const entity = new Klass(attrs).pojo // Only store POJOs in the state
    Vue.set(state[kind], entity.id, entity)
  },
  edit (kind, state, attrs) {
    const { id, ...props } = attrs
    const entity = state[kind][id]
    Object.entries(props).forEach(([key, value]) => {
      Vue.set(entity, key, value)
    })
  },
  remove (kind, state, attrs) {
    const { id } = attrs
    Vue.delete(state[kind], id)
  }
}

const mutations = {
  addLabel (state, payload) {
    baseMutations.add(Label, 'labels', state, payload.labelAttrs)
  },
  editLabel (state, payload) {
    baseMutations.edit('labels', state, payload.labelAttrs)
  },
  removeLabel (state, payload) {
    baseMutations.remove('labels', state, payload.labelAttrs)
  },

  addTask (state, payload) {
    baseMutations.add(Task, 'tasks', state, payload.taskAttrs)
  },
  editTask (state, payload) {
    baseMutations.edit('tasks', state, payload.taskAttrs)
  },
  removeTask (state, payload) {
    baseMutations.remove('tasks', state, payload.taskAttrs)
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
