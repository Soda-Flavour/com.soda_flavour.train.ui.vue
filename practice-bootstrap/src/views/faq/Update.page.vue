<template>
  <FAQForm :faq="faq" :submitForm="updateFAQ">
    <template slot="button"> 업데이트 </template>
  </FAQForm>
</template>

<script>
import FAQForm from "@/components/faq/FAQForm.vue";
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

export default {
  components: {
    FAQForm,
  },
  setup() {
    const { router, route } = useRouter();
    const faq = ref({ title: "", content: "" });

    const API_URL = "http://localhost:3000/api/v1/faqs";

    async function updateFAQ() {
      const { id } = route.value.params;
      const response = await fetch(`${API_URL}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: faq.value.title,
          content: faq.value.content,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        router.push({ name: "home" });
      } else {
        //show error
      }
    }

    async function getCurrentFAQ() {
      const { id } = route.value.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      faq.value = json.result.data.item;
      console.log(faq);
    }

    getCurrentFAQ();

    return {
      faq,
      updateFAQ,
    };
  },
};
</script>

<style>
</style>