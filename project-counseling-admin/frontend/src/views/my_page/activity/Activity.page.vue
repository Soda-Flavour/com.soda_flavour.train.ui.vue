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
      <div class="row mt-5">
        <div class="col-sm calendar-container">
          <div class="border p-3">
            <label for="basic-url">상담 가능일</label>
            <div class="form-inline col-12 my-2">
              <select class="form-control form-control-sm col-4" name="year" v-model="curYear" @change="getCalendarYear">
                <option v-if="year >= nowYear - prevYears" v-for="(year, index) in nowYear + futureYears" :value="year" :key="index">{{ year }}</option>
              </select>
              <select class="ml-3 form-control form-control-sm col-4" name="month" v-model="curMonth" @change="getCalendarMonth">
                <option v-for="(month, index) in 12" :value="index" :key="index">{{ monthsArray[index] }}</option>
              </select>
            </div>
            <div class="cal-row">
              <div class="col-md-12">
                <!-- <transition name="fade">
                  <div class="alert alert-success" v-if="filterDate != undefined">Date selected is: {{ formattedDate }}</div>
                </transition> -->
                <div v-if="gridArray" id="app-table">
                  <table class="calendar">
                    <thead>
                      <tr>
                        <th colspan="1">
                          <a class="button" v-on:click="previousMonth">«</a>
                        </th>
                        <th colspan="5" class="center-title">
                          {{ `${monthsArray[curMonth]} ${curYear}  ` }}
                        </th>
                        <th colspan="1">
                          <a class="button" v-on:click="nextMonth">»</a>
                        </th>
                      </tr>
                      <tr>
                        <th v-for="(i, index) in 7" :key="index">{{ daysArray[index] }}</th>
                      </tr>
                    </thead>
                    <tbody class="tbody-default" data-bind="foreach:gridArray">
                      <tr v-for="(item, index) in calendarMatrix" :key="index">
                        <td v-for="(data, i) in item" :class="{ occassion: data.occassion ? data.occassion : false }" :key="i" v-on:click="setDate(data.date, $event)">
                          <span v-bind:class="{ 'cal-selected': isActive(data.date), weekend: !(i % 7) || !((i + 1) % 7) }">
                            {{ data ? data.date.getDate() : "" }}
                          </span>
                          <!-- <div v-for="event in monthEvents" :key="event">
                          <div v-if="data ? data.date.getDay() == eventsArray[event].day && eventsArray[event].occurrence == 'Weekly' : false">
                            {{ eventsArray[event].memo }}{{ `${changeOccurrence(index, i)}` }}
                          </div>
                          <div v-else-if="data ? data.date.getDate() == eventsArray[event].day && eventsArray[event].occurrence != 'Weekly' : false">
                            {{ eventsArray[event].memo }}{{ `${changeOccurrence(index, i)}` }}
                          </div>
                          <div></div>
                        </div> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="border p-3">
            <label for="basic-url">상담 가능일</label>
            <div class="input-group-sm mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">일</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label class="form-check-label" for="inlineCheckbox2">월</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">화</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">수</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">목</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">금</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">토</label>
              </div>
            </div>
          </div>
        </div>
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
import moment from "moment";

import { ref } from "@vue/composition-api";

export default {
  components: {
    PageTitle,
  },

  setup() {
    const pageTitle = ref("마이페이지 - 활동 관리");

    return { pageTitle };
  },
  data() {
    const today = new Date();
    const nowMonth = today.getMonth();
    const nowYear = today.getFullYear();
    return {
      prevYears: 5, // number of years before current date
      futureYears: 1,
      nowMonth,
      nowYear,
      today,
      curMonth: nowMonth,
      curYear: nowYear,
      filterDate: undefined,
      selectedMonth: new Date(),
      eventsArray: [],
      calendarMatrix: [],
      monthsArray: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      daysArray: ["일", "월", "화", "수", "목", "금", "토"],
    };
  },
  mounted() {
    const vm = this;
    vm.eventsArray.push(vm.newEvent(25, 11, 2020, "Christmas Day", "Annual"));
    vm.eventsArray.push(vm.newEvent(30, 11, 2020, "My Birthday", "Annual"));
    vm.eventsArray.push(vm.newEvent(1, 1, 2019, "First Day of Month", "Monthly"));
    vm.eventsArray.push(vm.newEvent(2, 12, 2019, "Weekly occurence", "Weekly"));
    vm.eventsArray.push(vm.newEvent(24, 12, 2019, "Christmas Eve", "Annual"));
    vm.eventsArray.push(vm.newEvent(15, 3, 2019, "Physical Check-Up", "Annual"));
    vm.eventsArray.push(vm.newEvent(25, 3, 2019, "Meeting", "Annual"));
    vm.eventsArray.push(vm.newEvent(25, 3, 2019, "Test Meeting"));
  },
  methods: {
    newEvent(day, month, year, memo, occurrence) {
      return { day, month, year, memo, occurrence };
    },
    previousMonth() {
      const vm = this;
      vm.curMonth -= 1;
      const tmpDate = this.selectedMonth;
      vm.curMonth = tmpDate.getMonth() - 1;
      if (vm.curMonth < 0) {
        vm.curMonth = 11;
        if (vm.curYear > vm.nowYear - vm.prevYears) {
          vm.curYear -= 1;
        }
      }
      tmpDate.setFullYear(vm.curYear);
      tmpDate.setMonth(vm.curMonth);
      vm.selectedMonth = new Date(tmpDate);
    },
    nextMonth() {
      const vm = this;
      vm.curMonth += 1;

      const tmpDate = this.selectedMonth;
      vm.curMonth = tmpDate.getMonth() + 1;
      if (vm.curMonth > 11) {
        vm.curMonth = 0;
        if (vm.curYear < vm.nowYear + vm.futureYears) {
          vm.curYear += 1;
        }
      }
      tmpDate.setFullYear(vm.curYear);
      tmpDate.setMonth(vm.curMonth);
      vm.selectedMonth = new Date(tmpDate);
    },
    setDate(date, $event) {
      console.log($event.target.classList.toggle("occassion"));
      if (date == this.filterDate) {
        console.log("클릭을 해제합니다.");
        this.filterDate = undefined;
        // unselected
      } else {
        console.log("클릭 합니다.", date);

        this.filterDate = date;
      }
    },
    isActive(date) {
      return date === this.filterDate;
    },
    monthLength(date) {
      let monLength = 31;
      if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) monLength = 30;
      if (date.getMonth() == 1) {
        if (date.getYear() % 4) {
          monLength = 28;
        } else {
          monLength = 29;
        }
      }
      return monLength;
    },
    getCalendarMatrix(date) {
      console.log("달력을 그립니다.");
      const vm = this;
      const calendarMatrix = [];

      const startDay = new Date(date.getFullYear(), date.getMonth(), 1);

      const today = startDay.getDay();
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      console.log("startDay", startDay);
      console.log("today", today);

      let week = [];
      for (let i = 0; i < 42; i++) {
        if (i < today) {
          week.push("");
        } else if (!(i % 7) || !((i + 1) % 7)) {
          // get days of the weekend
          if (!(i % 7) && i > 0) {
            calendarMatrix.push(week);
            week = [];
          }
          week.push({ date: new Date(startDay), occassion: false });
          startDay.setDate(startDay.getDate() + 1);
        } else {
          week.push({ date: new Date(startDay), occassion: false });
          startDay.setDate(startDay.getDate() + 1);
        }
      }
      console.log("calendarMatrix", calendarMatrix);
      vm.calendarMatrix = calendarMatrix;
    },
    changeOccurrence(grid, item) {
      const vm = this;

      vm.$set(vm.calendarMatrix[grid][item], "occassion", true);
      return ``;
    },
    getCalendarYear() {
      const vm = this;
      const tmpDate = this.selectedMonth;
      tmpDate.setFullYear(vm.curYear);
      vm.selectedMonth = new Date(tmpDate);
    },
    getCalendarMonth() {
      const vm = this;
      const tmpDate = vm.selectedMonth;
      tmpDate.setMonth(vm.curMonth);
      vm.selectedMonth = new Date(tmpDate);
    },
  },
  computed: {
    monthEvents() {
      const vm = this;
      const monthEvents = [];
      for (let i = 0; i < vm.eventsArray.length; i++) {
        if (vm.eventsArray[i].month == vm.curMonth + 1 && (vm.eventsArray[i].year == vm.curYear || vm.eventsArray[i].occurrence == "Annual")) {
          monthEvents[monthEvents.length] = i;
        } else if (vm.eventsArray[i].occurrence == "Monthly" || vm.eventsArray[i].occurrence == "Weekly") {
          monthEvents[monthEvents.length] = i;
        }
      }
      return monthEvents;
    },
    gridArray() {
      this.getCalendarMatrix(this.selectedMonth);
      console.log("111111", this.selectedMonth);
      return this.selectedMonth;
    },
    formattedDate() {
      return this.filterDate ? moment(this.filterDate).format("lll") : "";
    },
  },
};
</script>

<style>
a.button {
  color: #ffff00;
}
/* .fullscreen {
  height: 600px;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5sabove;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.thead-default,
.thead-default a {
  background-color: #00bcd4;
  color: #fff;
}

.tbody-default {
  background-color: #eee;
}

a {
  padding: 10px 10px 10px 10px;
}

.center-title {
  text-align: center;
}

a.cal-selected,
a.cal-selected:focus {
  background-color: #368cb2;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.8em align-content;
}
.calendar {
  width: 100%;
  border: 1px solid #ddd;
}

.calendar td a {
  text-decoration: none;
  color: #006699;
}

.calendar td a:hover {
  text-decoration: underline;
  color: #ff0000;
}

.calendar td,
.calendar th {
  width: 13%;
  border: 1px solid #ddd;
  padding: 3px 3px 3px 3px;
}

.calendar th {
  background-color: #005999;
  color: #ffff00;
  font-weight: bold;
}

.calendar td {
  height: 60px;
  font-weight: bold;
  vertical-align: top;
}

@media screen and (max-width: 992px) {
  .calendar td {
    height: 40px;
  }
}
@media screen and (max-width: 767px) {
  .calendar td {
    height: 30px;
  }
}
@media screen and (max-width: 576px) {
  .calendar td {
    height: 50px;
  }
}

.blank {
  background-color: #ddd;
}

.weekend {
  color: #999;
}

.occassion {
  background-color: #ffffbf;
}
</style>
