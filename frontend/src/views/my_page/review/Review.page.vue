<template>
  <div class="mb-5">
    <PageTitle :pageTitle="pageTitle" />
    <div class="bg-light text-dark p-3">
      <span>
        <svg width="1.2em" height="1.1em" viewBox="0 0 20 20" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </span>
      <span>메인 후기 지정 기능은 추후 공개 예정입니다!</span>
    </div>
    <div class="container mt-4 mb-5">
      <div class="d-flex mb-3 justify-content-end">
        <!-- <button type="button" class="btn btn-primary ml-1">저장</button> -->
      </div>
      <hr class="mt-3 mb-3" />
      <div>
        <div class="row mt-5">
          <div class="col-sm">
            <div class="reviews">
              <div class="row blockquote review-item vertical-center">
                <div class="col-md-3 text-center">
                  <img class="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png" />
                  <div class="caption">
                    <small>
                      by
                      <a href="#joe">나무나무</a>
                    </small>
                  </div>
                </div>
                <div class="col-md-9 mobile-margin-top">
                  <h4>이야기를 잘 들어주셔서 너무 감사해요</h4>
                  <div class="star-box mt-1">
                    <div class="star-rating">
                      <div class="star-rating">
                        <span style="width: 35%"></span>
                      </div>
                    </div>
                  </div>
                  <p class="review-text mt-4">
                    잠, 하나에 많은 토끼, 벌레는 별 어머님, 그리워 부끄러운 계십니다. 내일 하나에 우는 그러나 말 잔디가 다하지 봅니다. 마리아 멀리 내 거외다. 어머니, 한 슬퍼하는 옥
                    소학교 별 내일 거외다. 이 속의 아침이 쉬이 까닭입니다. 사람들의 어머님, 쓸쓸함과 피어나듯이 하나에 있습니다. 이네들은 위에 다하지 아침이 소녀들의 애기 계십니다.
                    이름자를 언덕 하나의 피어나듯이 우는 아름다운 프랑시스 아직 비둘기, 봅니다. 이런 하나에 지나가는 위에도 버리었습니다. 봄이 지나가는 불러 어머님, 하나에 별을
                    나의 거외다.
                  </p>

                  <small class="review-date">2020.10.13</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-3 mb-3" />
      </div>
      <div>
        <div class="row mt-5">
          <div class="col-sm">
            <div class="reviews">
              <div class="row blockquote review-item vertical-center">
                <div class="col-md-3 text-center">
                  <img class="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png" />
                  <div class="caption">
                    <small>
                      by
                      <a href="#joe">나무나무</a>
                    </small>
                  </div>
                </div>
                <div class="col-md-9 mobile-margin-top">
                  <h4>이야기를 잘 들어주셔서 너무 감사해요</h4>
                  <div class="star-box mt-1">
                    <div class="star-rating">
                      <div class="star-rating">
                        <span style="width: 35%"></span>
                      </div>
                    </div>
                  </div>
                  <p class="review-text mt-4">
                    잠, 하나에 많은 토끼, 벌레는 별 어머님, 그리워 부끄러운 계십니다. 내일 하나에 우는 그러나 말 잔디가 다하지 봅니다. 마리아 멀리 내 거외다. 어머니, 한 슬퍼하는 옥
                    소학교 별 내일 거외다. 이 속의 아침이 쉬이 까닭입니다. 사람들의 어머님, 쓸쓸함과 피어나듯이 하나에 있습니다. 이네들은 위에 다하지 아침이 소녀들의 애기 계십니다.
                    이름자를 언덕 하나의 피어나듯이 우는 아름다운 프랑시스 아직 비둘기, 봅니다. 이런 하나에 지나가는 위에도 버리었습니다. 봄이 지나가는 불러 어머님, 하나에 별을
                    나의 거외다.
                  </p>

                  <small class="review-date">2020.10.13</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-3 mb-3" />
      </div>
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
  mounted() {},
  setup() {
    const pageTitle = ref("마이페이지 - 상담후기");
    return { pageTitle };
  },
};
</script>

<style scoped lang="scss">
.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */

  display: flex;
  align-items: center;
}

.mobile-margin-top {
  margin-top: 0px;
}
@media screen and (max-width: 767px) {
  .mobile-margin-top {
    margin-top: 40px;
  }
}

$ratingSize: 100px;

.star-rating {
  height: ($ratingSize/5);
  position: relative;
  width: $ratingSize;
  &:before {
    // inactive
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIGZpbGw9IiM3ZjhjOGQiID4gICAgPHBhdGggZD0iTSAyNSAyLjI3MzQzNzUgTCAxOC42MDkzNzUgMTguNDgwNDY5IEwgMC44MTA1NDY4OCAxOS40MTc5NjkgTCAxNC42NDg0MzggMzAuNDEyMTA5IEwgMTAuMDcwMzEyIDQ3LjIyMjY1NiBMIDI1IDM3Ljc3MTQ4NCBMIDM5LjkyOTY4OCA0Ny4yMjI2NTYgTCAzNS4zNTE1NjIgMzAuNDEyMTA5IEwgNDkuMTg5NDUzIDE5LjQxNzk2OSBMIDMxLjM5MDYyNSAxOC40ODA0NjkgTCAyNSAyLjI3MzQzNzUgeiI+PC9wYXRoPjwvc3ZnPg==");
    background-repeat: repeat-x;
    background-size: ($ratingSize/5);
    bottom: 0;
    content: "";
    display: block;
    height: ($ratingSize/5);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: $ratingSize;
  }
  > span {
    display: block;
    text-indent: -10000px;
    width: $ratingSize;
    height: ($ratingSize/5);
    position: absolute;
    overflow: hidden;
    &:before {
      // active
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIGZpbGw9IiNmMWM0MGYiID4gICAgPHBhdGggZD0iTSAyNSAyLjI3MzQzNzUgTCAxOC42MDkzNzUgMTguNDgwNDY5IEwgMC44MTA1NDY4OCAxOS40MTc5NjkgTCAxNC42NDg0MzggMzAuNDEyMTA5IEwgMTAuMDcwMzEyIDQ3LjIyMjY1NiBMIDI1IDM3Ljc3MTQ4NCBMIDM5LjkyOTY4OCA0Ny4yMjI2NTYgTCAzNS4zNTE1NjIgMzAuNDEyMTA5IEwgNDkuMTg5NDUzIDE5LjQxNzk2OSBMIDMxLjM5MDYyNSAxOC40ODA0NjkgTCAyNSAyLjI3MzQzNzUgeiI+PC9wYXRoPjwvc3ZnPg==");
      background-repeat: repeat-x;
      background-size: ($ratingSize/5);
      bottom: 0;
      content: "";
      display: block;
      height: ($ratingSize/5);
      left: 0;
      position: absolute;
      right: 0;
      text-indent: 10000px;
      top: 0;
    }
  }
}
</style>
