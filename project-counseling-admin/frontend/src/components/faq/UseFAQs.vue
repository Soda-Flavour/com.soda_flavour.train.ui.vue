<template>
  <div><slot :faqsList="faqsList.value"></slot></div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";

export default {
  setup(props, { root: { $store } }) {
    const faqsList = ref([]);
    const { faqList, loading } = useState("faqs", ["faqList", "loading"]);
    const { getFaqList } = useActions("faqs", ["getFaqList"]);

    getFaqList();
    faqsList.value = ref(faqList);

    return { faqsList };
  },
};
</script>

<style>
</style>