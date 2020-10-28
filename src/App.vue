<template>
  <div id="app">
    <Navbar v-if="isLogin === 'true'" />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useState } from "@u3u/vue-hooks";
export default {
  name: "App",
  components: { Navbar },
  setup(props) {
    const { isLogin } = useState("auth", ["isLogin"]);
    return { isLogin };
  },
};
</script>

<style lang="scss">
</style>
