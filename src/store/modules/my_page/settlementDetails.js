import { useRouter } from "@u3u/vue-hooks";
// import API_URL from "../../API_URL";
import settlementList from "../../dump/settlementList";

export default {
  namespaced: true,
  state: {
    loading: false,
    isLogin: localStorage.getItem("is_login"),
    isLoginError: false,
  },
  mutations: {},
  actions: {
    async getSettlementDetailsList({ state, commit }, reqParams) {
      try {
        state.loading = true;
        console.log("진입");
        console.log("id", reqParams);
        // const response = await fetch(API_URL + '/faqs');
        // const json = await response.json();
        const json = settlementList;
        const resultData = json.result.data.list;

        return resultData;
      } catch (error) {
        state.loading = false;
        return null;
      }
    },
  },
};
