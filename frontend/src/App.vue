<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <div class="container mt-3"> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useState } from "@u3u/vue-hooks";
import { defineComponent, SetupContext, computed } from "@vue/composition-api";

export default defineComponent({
  name: "App",
  components: { Navbar },
  setup(prop, ctx) {
    return {};
  },
});
</script>

<style lang="scss"></style>
