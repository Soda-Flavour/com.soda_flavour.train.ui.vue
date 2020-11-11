import API_URL from '../../API_URL';


export default {
  namespaced: true,
  state: {
    loading: false,
    faqList: [],
  },
  actions: {
    async getFaqList({
      state
    }) {
      try {
        state.loading = true;
        const response = await fetch(API_URL + '/faqs');
        const json = await response.json();
        state.faqList = json.result.data.list;
      } catch (error) {}
      state.loading = false;
    },
    async deleteFaqsItem({
      state,
      dispatch
    }, _id) {
      const response = await fetch(`${API_URL}/faqs/${_id}`, {
        method: "DELETE",
      });
      await dispatch('getFaqList');
    },
    async updateFaqsItem({
      state,
      dispatch
    }, _id) {
      const response = await fetch(`${API_URL}/faqs`, {
        method: "DELETE",
      });
      await dispatch('getFaqList');
    }
  },
};
