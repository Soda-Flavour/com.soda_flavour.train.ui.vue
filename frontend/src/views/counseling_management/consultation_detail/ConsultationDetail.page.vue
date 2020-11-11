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
        <!-- <button type="button" class="btn btn-primary ml-1">저장</button> -->
      </div>
      <hr class="mt-3 mb-3" />
      <div class="row">
        <div class="col-sm">
          <div class="mt-5"><h5>내담자 정보</h5></div>
          <div class="border p-3">
            <div>
              <label for="basic-url ">내담자 닉네임</label>
              <div class="pl-2">나무나무</div>
              <!-- <input disable class="form-control form-control-sm" /> -->
            </div>
            <!-- <div class="mt-4">
              <label for="basic-url ">간단소개</label>
              <textarea class="form-control form-control-sm" rows="10" style="height: 100%" />
            </div>
            <div class="mt-4">
              <label for="basic-url ">유튜브 영상 링크</label>
              <input class="form-control form-control-sm" />
            </div> -->
          </div>
        </div>
        <div class="col-sm">
          <div class="mt-5"><h5>상담권 정보</h5></div>
          <div class="border p-3">
            <div>
              <label for="basic-url ">상담권명</label>
              <div class="pl-2">50분 20회 문자 상담</div>
              <!-- <input disable class="form-control form-control-sm" /> -->
            </div>
            <div class="mt-4">
              <label for="basic-url ">총 제공 횟수</label>
              <div class="pl-2">20회</div>
              <!-- <input disable class="form-control form-control-sm" /> -->
            </div>
            <div class="mt-4">
              <label for="basic-url ">상담완료 횟수</label>
              <div class="pl-2">12회</div>
              <!-- <input disable class="form-control form-control-sm" /> -->
            </div>
            <div class="mt-4">
              <label for="basic-url ">상담권 사용 만료일</label>
              <div class="pl-2">2020.12.20</div>
              <!-- <input disable class="form-control form-control-sm" /> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mt-5"><h5>상담관리</h5></div> -->
      <div class="mt-5 d-flex mb-3 justify-content-between">
        <h5>상담관리</h5>
        <button type="button" class="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">상담 추가</button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">상담 추가 하기</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex w-100 justify-content-start">
                <span>
                  <datepicker input-class="inputCss" placeholder="날짜 선택" v-model="addCounselingDate" :format="customFormatter" :language="ko" />
                </span>
                <span class="ml-3"><vue-timepicker placeholder="시작시간 선택" :minute-interval="10" hour-label="시" minute-label="분" /></span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                <button type="button" class="btn btn-primary">추가</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
      </div>
      <div class="row list-scroll border">
        <div class="col-sm py-4">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">예약일: 2020-10-10 21:00 (50분)</h5>
                <small>
                  진행상태:
                  <span class="text-primary">예약완료</span>
                </small>
              </div>
              <p class="mt-2 mb-1">예약이 완료되어 대기중입니다.채팅방은 당일날 활성화 됩니다.</p>
              <div class="mt-3 d-flex w-100 justify-content-end">
                <button type="button" class="btn btn-secondary">상담방 입장</button>
                <button type="button" class="ml-3 btn btn-secondary">상담일지</button>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">예약일: 2020-08-23 21:00 (50분)</h5>
                <small>
                  진행상태:
                  <span class="text-success">상담완료</span>
                </small>
              </div>
              <p class="mt-2 mb-1">완료된 상담입니다. 상담내용 및 일지를 확인 할 수 있습니다.</p>
              <div class="mt-3 d-flex w-100 justify-content-end">
                <button type="button" class="btn btn-secondary">상담방 입장</button>
                <button type="button" class="ml-3 btn btn-secondary">상담일지</button>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">예약일: 2020-08-23 21:00 (50분)</h5>
                <small>
                  진행상태:
                  <span class="text-success">상담완료</span>
                </small>
              </div>
              <p class="mt-2 mb-1">완료된 상담입니다. 상담내용 및 일지를 확인 할 수 있습니다.</p>
              <div class="mt-3 d-flex w-100 justify-content-end">
                <button type="button" class="btn btn-secondary">상담방 입장</button>
                <button type="button" class="ml-3 btn btn-secondary">상담일지</button>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">예약일: 2020-08-23 21:00 (50분)</h5>
                <small>
                  진행상태:
                  <span class="text-success">상담완료</span>
                </small>
              </div>
              <p class="mt-2 mb-1">완료된 상담입니다. 상담내용 및 일지를 확인 할 수 있습니다.</p>
              <div class="mt-3 d-flex w-100 justify-content-end">
                <button type="button" class="btn btn-secondary">상담방 입장</button>
                <button type="button" class="ml-3 btn btn-secondary">상담일지</button>
              </div>
            </a>
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
import Datepicker from "vuejs-datepicker";
import { ko } from "vuejs-datepicker/dist/locale";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import moment from "moment";
import { ref, mounted, reactive, toRefs } from "@vue/composition-api";
import $ from "jquery";

export default {
  components: {
    PageTitle,
    Datepicker,
    VueTimepicker,
  },
  mounted() {
    $(document)
      .on("click", ".btn-add", function (e) {
        e.preventDefault();

        const controlForm = $(".controls form:first");
        const currentEntry = $(this).parents(".entry:first");
        const newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find("input").val("");
        controlForm
          .find(".entry:not(:last) .btn-add")
          .removeClass("btn-add")
          .addClass("btn-remove")
          .removeClass("btn-success")
          .addClass("btn-danger")
          .html('삭제<span class="glyphicon glyphicon-minus"></span>');
      })
      .on("click", ".btn-remove", function (e) {
        $(this).parents(".entry:first").remove();

        e.preventDefault();
        return false;
      });
  },
  setup() {
    const pageTitle = ref("상담관리 - 상담 상세");
    const state = reactive({
      addCounselingDate: null,
    });

    function customFormatter(date) {
      return moment(date).format("YYYY.MM.DD");
    }

    return { pageTitle, ...toRefs(state), ko, customFormatter };
  },
};
</script>

<style>
.entry:not(:first-of-type) {
  margin-top: 10px;
}

.glyphicon {
  font-size: 12px;
}

.list-scroll {
  max-height: 35vh;
  overflow: scroll;
}
.list-scroll::-webkit-scrollbar {
  -webkit-appearance: none;
}

.list-scroll::-webkit-scrollbar:vertical {
  width: 11px;
}

.list-scroll::-webkit-scrollbar:horizontal {
  height: 11px;
}

.list-scroll::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid white; /* should match background, can't be transparent */
  background-color: rgba(0, 0, 0, 0.5);
}

.inputCss {
  border: 1px solid #d2d2d2;
  width: 10em;
  height: 2.2em;
  padding: 0.3em 0.5em;
  font-size: 1em;
}
</style>
