<template>
  <FAQForm :faq="faq" :submitForm="createFAQ">
    <template slot="button"> 생성 </template>
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
    const { router } = useRouter();
    const faq = ref({ title: "", content: "" });

    const API_URL = "http://localhost:3000/api/v1/faqs";

    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
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

    return {
      faq,
      createFAQ,
    };
  },
};
</script>

<style>
</style>