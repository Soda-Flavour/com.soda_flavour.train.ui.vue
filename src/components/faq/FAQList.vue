<template>
  <UseFAQs>
    <template v-slot="{ faqs }">
      <div class="card my-3" v-for="faq in faqs" :key="faq.id">
        <div class="card-body">
          <h5 class="card-title">{{ faq.title }}</h5>
          <p class="card-text">
            {{ faq.content }}
          </p>
          <button @click="removeFAQ(faq.id)" class="btn btn-danger mr-2">
            삭제
          </button>
          <button @click="updateFAQ(faq.id)" class="btn btn-info">수정</button>
        </div>
      </div>
    </template>
  </UseFAQs>
</template>

<script>
import { useRouter } from "@u3u/vue-hooks";

import UseFAQs from "@/components/faq/UseFAQs.vue";
import useFAQs from "../../hooks/faq/useFAQs";
import API_URL from "../../API_URL";

export default {
  components: {
    UseFAQs,
  },
  setup(props, { root: { $store } }) {
    const { router } = useRouter();
    const { removeFAQData } = useFAQs($store);

    async function removeFAQ(_id) {
      console.log("test_1");
      await removeFAQData(_id);
      console.log("test_2");
    }

    async function updateFAQ(_id) {
      router.push({ name: "update", params: { id: _id } });
    }

    return { removeFAQ, updateFAQ };
  },
};
</script>

<style>
</style>