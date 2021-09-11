import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import contact from "./module/contact.module"

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    contact,
  },
  plugins: [],
})
