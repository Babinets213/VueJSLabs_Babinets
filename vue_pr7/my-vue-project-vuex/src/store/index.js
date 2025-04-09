import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setCount(state, payload) {
      state.count = payload;
    }
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    asyncSetCount({ commit }, value) {
      setTimeout(() => {
        commit('setCount', value);
      }, 1000);
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
});