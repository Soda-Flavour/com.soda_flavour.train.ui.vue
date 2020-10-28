<template>
  <div class="home">
    <router-link
      :to="{ name: 'create' }"
      type="button"
      class="btn btn-primary mx-3 my-3"
      >생성</router-link
    >
    <FAQList />
  </div>
</template>

<script>
import FAQList from "@/components/FAQList.vue";
export default {
  components: { FAQList },
};
</script>
