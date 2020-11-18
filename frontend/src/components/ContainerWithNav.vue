<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  setup(prop, ctx) {
    return {};
  },
};
</script>

<style>
</style>