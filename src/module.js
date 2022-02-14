import Vue from 'vue';

const moduleFactory = () => ({
  actions: {
    fetchFeature({ commit }) {
      commit('setFeatures', { myFeature: true });
    }
  },
  mutations: {
    setFeatures(state, features) {
      Vue.set(state, 'features', Object.assign({}, features));
    }
  },
  namespaced: true,
  state: {
    features: {}
  }
});

export { moduleFactory };
