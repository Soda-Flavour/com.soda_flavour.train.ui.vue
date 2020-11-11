<template>
  <div class="mt-3">
    <div class="cal-row">
      <div class="col-md-12 p-0">
        <div v-if="loadCalendar" id="app-table">
          <table class="calendar">
            <thead>
              <tr>
                <th colspan="1">
                  <a class="button" v-on:click="previousMonthBtn">«</a>
                </th>
                <th colspan="5" class="center-title">
                  {{ `${curYear}년 ${monthsTextArr[curMonth]}` }}
                </th>
                <th colspan="1">
                  <a class="button" v-on:click="nextMonthBtn">»</a>
                </th>
              </tr>
              <tr>
                <th class="pl-2" v-for="(i, index) in 7" :key="index">{{ daysTextArr[index] }}</th>
              </tr>
            </thead>
            <tbody class="tbody-default" data-bind="foreach:loadCalendar">
              <tr v-for="(item, index) in calendarMatrix" :key="index">
                <td v-for="(data, i) in item" :key="i" v-on:click="dayClickEvent(data.day)" class="pl-2" :class="{ occassion: data.isSelect ? true : false }">
                  <span v-bind:class="{ weekend: !(i % 7) || !((i + 1) % 7) }">{{ data.day }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "@vue/composition-api";

export default {
  name: "SodaCalendar",
  props: ["v-clickable"],
  setup(props) {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();
    const calendarData = reactive({
      clickable: props.clickable,
      curMonth: nowMonth,
      curYear: nowYear,
      selectedDays: [],
      calendarMatrix: [],
      monthsTextArr: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      daysTextArr: ["일", "월", "화", "수", "목", "금", "토"],
    });

    function getCalendarMatrix(date) {
      // console.log("달력을 그립니다.", date);
      // const vm = this;
      const calendarMatrix = [];

      const startDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const startDayPositionOfWeek = startDayOfMonth.getDay();
      // console.log("startDayPositionOfMonth", startDayOfMonth);
      // console.log("startDayPositionOfWeek", startDayPositionOfWeek);
      // console.log("endDayOfMonth", endDayOfMonth);
      const drawLoopNum = startDayPositionOfWeek + endDayOfMonth;

      let week = [];
      for (let i = 0; i <= drawLoopNum; i += 1) {
        if (i < startDayPositionOfWeek) {
          week.push("");
        } else if (i <= drawLoopNum - 1) {
          const day = i - startDayPositionOfWeek + 1;
          const dayData = calendarData.selectedDays.indexOf(day) !== -1;
          if (i % 7 === 0 && i !== 0) {
            calendarMatrix.push(week);
            week = [{ day, isSelect: dayData }];
          } else {
            week.push({ day, isSelect: dayData });
          }
        }
        if (i === drawLoopNum) {
          const lastWeek = week.length < 7 ? [...week, ...new Array(7 - week.length).fill("")] : week;
          calendarMatrix.push(lastWeek);
        }
      }

      calendarData.calendarMatrix = calendarMatrix;
    }

    function dayClickEvent(day) {
      if (calendarData.clickable) {
        if (day !== "") {
          if (calendarData.selectedDays.indexOf(day) !== -1) {
            calendarData.selectedDays.splice(calendarData.selectedDays.indexOf(day), 1);
          } else {
            calendarData.selectedDays.push(day);
          }
        }
        getCalendarMatrix(new Date(calendarData.curYear, calendarData.curMonth));
      }
    }

    function loadCalendar() {
      getCalendarMatrix(new Date());
      return 1;
    }

    function previousMonthBtn() {
      calendarData.curMonth -= 1;
      if (calendarData.curMonth === -1) {
        calendarData.curYear -= 1;
        calendarData.curMonth = 11;
      }
      getCalendarMatrix(new Date(calendarData.curYear, calendarData.curMonth));
    }
    function nextMonthBtn() {
      calendarData.curMonth += 1;
      if (calendarData.curMonth === 12) {
        calendarData.curYear += 1;
        calendarData.curMonth = 0;
      }

      getCalendarMatrix(new Date(calendarData.curYear, calendarData.curMonth));
    }
    loadCalendar();
    return { ...toRefs(calendarData), loadCalendar, previousMonthBtn, nextMonthBtn, dayClickEvent };
  },
};
</script>

<style>
a.button {
  color: #ffffff;
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
  color: #ffffff;
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
