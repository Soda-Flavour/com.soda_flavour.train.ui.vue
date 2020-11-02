<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="bg-light text-dark p-3">
      <span>
        <svg width="1.2em" height="1.1em" viewBox="0 0 20 20" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </span>
      <span>페이지에서 옵션을 수정했을시 반드시 저장을 눌러주세요!</span>
    </div>
    <div class="container mt-4 mb-5">
      <div class="d-flex mb-3 justify-content-end">
        <button type="button" class="btn btn-primary ml-1">저장</button>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="border p-3">
            <div>
              <label for="basic-url ">앱 내 상담사 공개 설정</label>
              <select class="form-control form-control-sm">
                <option>비공개</option>
                <option>공개</option>
              </select>
            </div>
            <div class="mt-4">
              <label for="basic-url">문자 상담 예약 가능 설정</label>
              <select class="form-control form-control-sm">
                <option>불가능</option>
                <option>가능</option>
              </select>
            </div>
            <div class="mt-4">
              <label for="basic-url">전화 상담 예약 가능 설정</label>
              <select class="form-control form-control-sm">
                <option>불가능</option>
                <option>가능</option>
              </select>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm">
          <div class="border p-3">
            <label for="basic-url">Your vanity URL</label>
            <div class="input-group-sm mb-3">
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-secondary mr-1">뒤로가기</button>
      <button type="button" class="btn btn-primary ml-1">저장</button>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "@vue/composition-api";

export default {
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref("마이페이지 - 활동 관리");
    return { pageTitle };
  },
};
</script>

<style></style>
