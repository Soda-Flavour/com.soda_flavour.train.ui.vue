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
      <hr class="mt-3 mb-3" />
      <div class="mt-5"><h5>기본정보</h5></div>
      <div class="row">
        <div class="col-sm">
          <div class="border p-3">
            <div>
              <label for="basic-url ">상담사 이름</label>
              <input class="form-control form-control-sm" />
            </div>
            <div class="mt-4">
              <label for="basic-url ">간단소개</label>
              <textarea class="form-control form-control-sm" rows="10" style="height: 100%" />
            </div>
            <div class="mt-4">
              <label for="basic-url ">유튜브 영상 링크</label>
              <input class="form-control form-control-sm" />
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
      <div class="mt-5"><h5>추가 정보</h5></div>
      <div class="row">
        <div class="col-sm">
          <div class="border p-3">
            <div>
              <label for="basic-url ">경력</label>
              <div class="control-group" id="fields">
                <div class="controls">
                  <form role="form" autocomplete="off">
                    <div class="entry input-group col-xs-3">
                      <input class="form-control" name="fields[]" type="text" placeholder="경력을 입력해주세요" />
                      <span class="input-group-btn">
                        <button class="btn btn-success btn-add" type="button">
                          추가
                          <span class="glyphicon glyphicon-plus"></span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <label for="basic-url ">상담사 소개</label>
              <textarea class="form-control form-control-sm" rows="10" style="height: 100%" />
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
import { ref, mounted } from "@vue/composition-api";
import $ from "jquery";

export default {
  components: {
    PageTitle,
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
    const pageTitle = ref("마이페이지 - 나의 정보");
    return { pageTitle };
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
</style>
