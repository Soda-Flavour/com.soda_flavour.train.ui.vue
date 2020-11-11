<template>
  <div>
    <PageTitle :pageTitle="pageTitle" />
    <div class="mt-5 mb-3 d-flex justify-content-between">
      <button type="button" class="btn btn-primary ml-1">상품 추가</button>

      <div class="input-group-prepend justify-content-end">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">조건검색</button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">닉네임</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
        <input type="text" class="w-30 ml-1" aria-label="Text input with dropdown button" />
        <button type="button" class="btn btn-primary ml-1">검색</button>
      </div>
    </div>
    <!-- <div class="input-group mt-5 mb-3 justify-content-between">
      <button type="button" class="btn btn-primary ml-1">검색</button>
      <div class="justify-content-end">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">조건검색</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">닉네임</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <input type="text" class="w-25" aria-label="Text input with dropdown button" />
        <button type="button" class="btn btn-primary ml-1">검색</button>
      </div>
    </div> -->
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">상담 분류</th>
          <th scope="col">상품명</th>
          <th scope="col">상품 상태</th>
          <th scope="col">횟수</th>
          <th scope="col">사용기간</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <span v-if="item.counseling_type == 'text'">문자</span>
            <span v-else-if="item.counseling_type == 'tel'">전화</span>
            ({{ item.counseling_time_length }}분)
          </td>
          <td>
            <a class="text-primary">{{ item.user_id }}</a>
          </td>
          <td>
            <router-link class="text-primary" :to="{ name: 'counseling_management-consultation_detail', query: { userId: 123 } }">
              {{ item.coming_up_counseling_date }}
            </router-link>
          </td>
          <td>{{ item.number_of_times }}</td>
          <td>{{ item.expiration_date }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/composition-api";
import { useActions } from "@u3u/vue-hooks";
import PageTitle from "@/components/PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref("상품관리 - 문자상담");
    const userList = ref([]);
    const { getUserList } = useActions("onGoing", ["getUserList"]);
    onMounted(async () => (userList.value = await getUserList()));
    console.log(userList);

    return { pageTitle, userList };
  },
};
</script>

<style></style>
