<template>
  <div><slot :faqs="faqs"></slot></div>
</template>

<script>
import useFAQs from "../../hooks/faq/useFAQs";
import { mapState } from "vuex";

export const { faqList } = mapState(["faqList"]);
import { ref } from "@vue/composition-api";

export default {
  setup(props, { root: { $store } }) {
    const faqs = ref([]);
    // $store.commit("setFaqList",{});
    const { getFAQs } = useFAQs($store);

    async () => {
      console.log("11111");
      await getFAQs();
    };

    // getFAQs();
    faqs.value = $store.getters.faqList;

    return { faqs };
  },
};
</script>

<style>
</style>