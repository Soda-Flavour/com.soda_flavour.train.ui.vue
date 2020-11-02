<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Application
          <br />
          Login Page
        </h2>
        <p>Login or register from here to access.</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form @submit.prevent="doLogin">
            <div class="form-group">
              <label>User Name</label>
              <input v-model="user_id" type="text" class="form-control" placeholder="User Name" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="user_password" type="password" class="form-control" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-black">Login</button>
            <button type="button" class="btn btn-secondary ml-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useRouter, useState, useActions } from "@u3u/vue-hooks";

export default {
  name: "login",
  props: ["auth"],
  setup(props) {
    const { router } = useRouter();
    const { actLogin } = useActions("auth", ["actLogin"]);
    const user_id = ref("");
    const user_password = ref("");

    async function doLogin() {
      const isLogin = await actLogin({
        user_id: user_id.value,
        user_password: user_password.value,
      });
      if (isLogin.status === "fail") {
        alert("로그인에 실패했습니다.");
      } else {
        router.push({ name: "home" });
      }
    }

    return {
      doLogin,
      user_id,
      user_password,
    };
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>
