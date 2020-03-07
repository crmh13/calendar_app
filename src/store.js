import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: []
  },
  getters: {
    todo(state) {
      return state.todoList
    }
  },
  mutations: {
    save(state, todo) {
      state.todoList.push(todo)
    }
  }
})

export default store