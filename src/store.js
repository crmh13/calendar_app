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
    },
    update(state, todo) {
      const num = state.todoList.findIndex(date => date.date === todo.date)
      state.todoList[num] = todo
    },
    delete(state, todo) {
      const num = state.todoList.findIndex(date => date.date === todo.date)
      state.todoList.splice(num, 1)
    }
  }
})

export default store