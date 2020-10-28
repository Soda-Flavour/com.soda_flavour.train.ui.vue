<template>
  <UseFAQs>
    <template v-slot="{ faqsList }">
      <div class="card my-3" v-for="faq in faqsList" :key="faq.id">
        <div class="card-body">
          <h5 class="card-title">{{ faq.title }}</h5>
          <p class="card-text">
            {{ faq.content }}
          </p>
          <button @click="deleteFaqsItem(faq.id)" class="btn btn-danger mr-2">
            삭제
          </button>
          <button @click="goToUpdatePage(faq.id)" class="btn btn-info">
            수정
          </button>
        </div>
      </div>
    </template>
  </UseFAQs>
</template>

<script>
import { useRouter, useState, useActions } from "@u3u/vue-hooks";

import UseFAQs from "@/components/faq/UseFAQs.vue";
import API_URL from "../../API_URL";

export default {
  components: {
    UseFAQs,
  },
  setup(props, { root: { $store } }) {
    const { router } = useRouter();
    const { deleteFaqsItem } = useActions("faqs", ["deleteFaqsItem"]);

    async function goToUpdatePage(_id) {
      router.push({ name: "update", params: { id: _id } });
    }

    return { deleteFaqsItem, goToUpdatePage };
  },
};
</script>

<style>
</style>