import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    index: ''
  },
  mutations: {
    addItem (state,value) {
      state.list.push(value)
    },
    setIndex(state,value){
      state.index = value
    }
  },
  actions: {

  }
})
