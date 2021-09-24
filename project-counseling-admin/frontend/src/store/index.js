import Vue from "vue";
import Vuex from "vuex";

import faqs from "./modules/faqs";

import auth from "./modules/auth";
import onGoing from "./modules/counseling_management/onGoing";
import detailsOfClient from "./modules/counseling_management/detailsOfClient";

import settlementDetails from "./modules/my_page/settlementDetails";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    faqs,
    auth,
    onGoing,
    settlementDetails,
    detailsOfClient,
  },
});
