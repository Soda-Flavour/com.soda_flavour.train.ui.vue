<template>
  <div>
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
            <a class="nav-link" href="/"
              >대쉬보드 <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascript:;"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              마이페이지
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">활동 관리</a>
              <a class="dropdown-item" href="#">정산 내역</a>
              <a class="dropdown-item" href="#">나의 정보</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">상담 후기</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascript:;"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              상담 관리
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">예약 관리</a>
              <a class="dropdown-item" href="#">진행중인 상담</a>
              <a class="dropdown-item" href="#">종료된 상담</a>
              <a class="dropdown-item" href="#">내담자 상담내역</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascript:;"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              상품관리
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">문자상담</a>
              <a class="dropdown-item" href="#">전화상담</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascript:;"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              도움 센터
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">공지사항</a>
              <a class="dropdown-item" href="#">장애신고</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">이용안내</a>
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
        <button
          class="btn btn-outline-secondary ml-lg-3 my-2"
          v-on:click="actLogout"
        >
          로그아웃
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useActions } from "@u3u/vue-hooks";

export default {
  setup(props) {
    const { actLogout } = useActions("auth", ["actLogout"]);

    return { actLogout };
  },
};
</script>

<style>
</style>