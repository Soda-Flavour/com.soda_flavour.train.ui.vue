import { useRouter } from "@u3u/vue-hooks";
// import API_URL from "../../API_URL";
import userList from "../dump/adminUserList";

export default {
  namespaced: true,
  state: {
    loading: false,
    isLogin: localStorage.getItem("is_login"),
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state) {
      localStorage.setItem("is_login", true);
      state.isLogin = true;
      state.isLoginError = false;
    },
    loginFail(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      localStorage.clear();
    },
  },
  actions: {
    async actLogin({ state, commit }, reqParams) {
      try {
        state.loading = true;
        console.log("진입");
        console.log("id", reqParams);
        // const response = await fetch(API_URL + '/faqs');
        // const json = await response.json();
        const json = userList;
        const users = json.result.data.list;

        // connect to dump...
        let selectUser = null;

        for (const user of users) {
          if (user.user_id == reqParams.user_id) {
            selectUser = user;
          }
        }
        console.log("selectUser", selectUser);

        if (selectUser === null || selectUser.password !== reqParams.user_password) {
          console.log("111111");
          commit("loginFail");
          return {
            status: "fail",
            message: "로그인에 실패했습니다.",
          };
        }

        commit("loginSuccess");
        console.log("222222");
        return {
          status: "success",
          message: "로그인에 성공했습니다.",
        };
      } catch (error) {
        state.loading = false;
        return {
          status: "fail",
          message: "로그인에 실패했습니다.",
        };
      }
    },
    async actLogout({ state, commit }) {
      const { router } = useRouter();

      commit("logout");
      router.push({
        name: "login",
      });
    },
  },
};
