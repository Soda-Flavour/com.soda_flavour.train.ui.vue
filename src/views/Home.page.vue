<template>
  <div class="home">
    <router-link :to="{ name: 'create' }" class="button is-warning mx-5 my-5"
      >Create</router-link
    >
    <FAQList />
  </div>
</template>

<script>
import FAQList from "@/components/faq/FAQList.vue";
export default {
  components: {
    FAQList,
  },
};
</script>