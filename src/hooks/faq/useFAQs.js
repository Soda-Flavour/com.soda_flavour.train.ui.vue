import {
  ref
} from '@vue/composition-api';

import API_URL from '../../API_URL'



export default function useFAQs(store) {
  const faqs = ref([]);
  const $store = store;

  async function getFAQs() {
    const response = await fetch(API_URL + '/faqs');
    const json = await response.json();

    $store.commit('setFaqList', json.result.data.list);
    // faqs.value = $store.getters.faqList;
  }

  async function removeFAQData(_id) {
    const response = await fetch(`${API_URL}/faqs/${_id}`, {
      method: "DELETE",
    });


  }



  return {
    faqs,
    getFAQs,
    removeFAQData,
  }


}
