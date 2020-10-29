<template>
  <div>
    <div><h3>마이페이지 - 진행중인 상담</h3></div>
    <div class="input-group mb-3 justify-content-end">
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
      <button type="button" class="btn btn-primary ml-1">Primary</button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">닉네임</th>
          <th scope="col">가입일</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>나무나문</td>
          <td>2020-10-20</td>
          <td>겨울나무</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>가을하늘</td>
          <td>2020-09-13</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="1">겨울나무</td>
          <td>2020-12-12</td>
          <td colspan="1">겨울나무</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
