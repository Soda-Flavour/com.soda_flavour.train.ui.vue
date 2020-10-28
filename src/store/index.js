import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    faqList: []
  },
  mutations: {
    setFaqList(state, lists) {
      state.faqList = lists;
    }
  },
  getters: {
    faqList: state => state.faqList,
  },
  actions: {},
  modules: {},
});
