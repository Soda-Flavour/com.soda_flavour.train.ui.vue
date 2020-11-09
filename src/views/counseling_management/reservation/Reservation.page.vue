<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="bg-light text-dark p-3">
      <div>
        <span>
          <svg width="1.2em" height="1.1em" viewBox="0 0 20 20" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </span>
        <span>페이지에서 옵션을 수정했을시 반드시 저장을 눌러주세요!</span>
      </div>
      <div>
        <span>
          <svg width="1.2em" height="1.1em" viewBox="0 0 20 20" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </span>
        <span>달력 날짜 선택은 실제 내담자가 예약시에 볼 수 있는 화면이며, 요일 선택은 프로필페이지에서 보여집니다!</span>
      </div>
    </div>
    <div class="container mt-4 mb-5">
      <!-- <div class="d-flex mb-3 justify-content-end">
        <button type="button" class="btn btn-primary ml-1">저장</button>
      </div> -->

      <div class="row mt-5">
        <div class="col-md calendar-container">
          <div class="border p-4">
            <div class="row">
              <div class="col">
                <h4>상담 예약현황</h4>
              </div>
              <div class="col-auto">
                <!-- <button type="button" class="btn btn-primary ml-1">저장</button> -->
              </div>
            </div>
            <SodaCalendar :v-clickable="false" />
          </div>
        </div>
        <div class="col mt-sm-4 mt-md-0">
          <div class="border pl-4 pr-4 pt-4">
            <div class="row border-bottom pb-3">
              <div class="col">
                <h4>2020.11.12 -5건의 상담-</h4>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-primary ml-1">추가</button>
              </div>
            </div>
            <div class="list-limit overflow-auto">
              <div class="card mt-2" v-for="(i, index) in 7" :key="index">
                <div class="card-body">
                  <div class="row">
                    <h5 class="card-title col">15:20</h5>
                    <div class="col-auto">
                      <a href="#" class="card-link">상세보기</a>
                    </div>
                  </div>
                  <p class="card-text">
                    <span>나무나무</span>
                    <span>문자상담 30분</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-secondary mr-1">뒤로가기</button>
      <!-- <button type="button" class="btn btn-primary ml-1">저장</button> -->
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import SodaCalendar from "@/components/SodaCalendar.vue";

import { ref } from "@vue/composition-api";

export default {
  components: {
    PageTitle,
    SodaCalendar,
  },

  setup() {
    const pageTitle = ref("상담관리 - 예약관리");

    return { pageTitle, SodaCalendar };
  },
};
</script>

<style>
.list-limit {
  max-height: 384px;
}
@media screen and (max-width: 992px) {
  .list-limit {
    max-height: 258px;
  }
}
</style>
