import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
    isDesktop() {
        if (window.innerWidth >= 992) {
            return true;
        } else if (window.innerWidth < 991) {
            return false;
        }
    },
},
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
