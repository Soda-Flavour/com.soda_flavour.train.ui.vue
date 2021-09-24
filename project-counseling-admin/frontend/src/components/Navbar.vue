<template>
  <div v-if="isLogin">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              대쉬보드
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              마이페이지
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'my_page-activity' }">활동 관리</router-link>
              <router-link class="dropdown-item" :to="{ name: 'my_page-settlement_details' }">정산 내역</router-link>
              <router-link class="dropdown-item" :to="{ name: 'my_page-my_info' }">나의 정보</router-link>
              <!-- <div class="dropdown-divider"></div> -->
              <router-link class="dropdown-item" :to="{ name: 'my_page-review' }">상담 후기</router-link>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              상담 관리
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'counseling_management-reservation' }">예약 관리</router-link>
              <router-link class="dropdown-item" :to="{ name: 'counseling_management-ongoing' }">진행중인 상담</router-link>
              <router-link class="dropdown-item" :to="{ name: 'counseling_management-terminated' }">종료된 상담</router-link>
              <router-link class="dropdown-item" :to="{ name: 'counseling_management-details_of_client' }">내담자 상담내역</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">상품관리</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'product_management-textual' }">문자상담</router-link>
              <router-link class="dropdown-item" :to="{ name: 'product_management-telephone' }">전화상담</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              도움 센터
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'help_center-notice' }">공지사항</router-link>
              <router-link class="dropdown-item" :to="{ name: 'help_center-disability_report' }">장애신고</router-link>
              <router-link class="dropdown-item" :to="{ name: 'help_center-how_to_use' }">이용안내</router-link>
            </div>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
        <button class="btn btn-outline-secondary ml-lg-3 my-2" v-on:click="actLogout">로그아웃</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useActions } from "@u3u/vue-hooks";
import { computed, ref } from "@vue/composition-api";

export default {
  setup() {
    const { actLogout } = useActions("auth", ["actLogout"]);
    const isLogin = ref(sessionStorage.getItem("teacher_access_token") && sessionStorage.getItem("teacher_access_token") !== "");

    return { isLogin, actLogout };
  },
};
</script>

<style></style>
