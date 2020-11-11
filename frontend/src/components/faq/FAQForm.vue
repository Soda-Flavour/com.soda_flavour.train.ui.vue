
<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="exampleInputEmail1">제목</label>
      <input
        v-model="faq.title"
        type="text"
        name="title"
        class="form-control"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >제목을 입력해주세요</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">내용</label>
      <textarea
        v-model="faq.content"
        class="form-control"
        name="content"
        rows="4"
        aria-label="With textarea"
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primary">
      <slot name="button"></slot>
    </button>
  </form>
</template>

<script>
export default {
  name: "FAQForm",
  props: ["submitForm", "faq"],
  setup(props) {
    return {
      title: props.faq.title,
      content: props.faq.content,
    };
  },
};
</script>

<style>
</style>