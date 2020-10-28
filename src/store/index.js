import Vue from 'vue';
import Vuex from 'vuex';

import faqs from './modules/faqs'

import auth from './modules/auth'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    faqs,
    auth,
  }
});
