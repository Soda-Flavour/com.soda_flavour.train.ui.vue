import { useRouter } from "@u3u/vue-hooks";
// import API_URL from "../../API_URL";
import userCounselingHistory from "../../dump/userCounselingHistory";

export default {
  namespaced: true,
  state: {
    loading: false,
    isLogin: localStorage.getItem("is_login"),
    isLoginError: false,
  },
  mutations: {},
  actions: {
    async getUserCounselingHistoryList({ state, commit }, reqParams) {
      try {
        state.loading = true;
        console.log("진입");
        console.log("id", reqParams);
        // const response = await fetch(API_URL + '/faqs');
        // const json = await response.json();
        const json = userCounselingHistory;
        const users = json.result.data.list;

        return users;
      } catch (error) {
        state.loading = false;
        return null;
      }
    },
  },
};
