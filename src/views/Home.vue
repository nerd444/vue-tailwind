<template>
  <div class="h-full flex flex-row">
    <div class="w-screen">
      <div class="flex flex-col">
        <div class="w-1/3 p-4">종류</div>
        <div class="w-2/3 px-4 py-2">
          <accordion-select
            :type="trainingType"
            text="트레이닝"
            :items="[
              '복부 집중 트레이닝',
              '상체 집중 트레이닝',
              '하체 집중 트레이닝',
              ''
            ]"
            @clicked="handleTrainingType"
          >
          </accordion-select>
        </div>
        <!-- 직접 입력 선택으로 (배열에 ''부분만 지우면 됨...!) -->
        <div class="w-1/3 p-4 mt-10">연령대</div>
        <div class="w-2/3 px-4 py-2">
          <accordion-period
            class="bg-gray-200"
            :type="periodType"
            text=" 연령대"
            :isInput="true"
            :items="['20 ~ 30대', '30 ~ 40대', '40 ~ 50대']"
            @clicked="handlePeriodType"
          >
          </accordion-period>
        </div>
      </div>
      <template><span>test</span></template>

      <div class="my-20 w-full px-10">
        <accordion-test
          @clicked="handleType"
          :selectItem="type"
          :items="[
            '복부 집중 트레이닝',
            '상체 집중 트레이닝',
            '하체 집중 트레이닝'
          ]"
        />
      </div>

      <div class="ml-20">
        <select
          name=""
          id=""
          class="appearance-none focus:outline-none border rounded-lg  py-2 px-8"
        >
          <option value="">복부 집중 트레이닝</option>
          <option value="">상체 집중 트레이닝</option>
          <option value="">하체 집중 트레이닝</option>
        </select>
      </div>

      <div>
        <datepicker
          :value="date"
          :language="ko"
          :format="dateFormatter"
          :calendar-button-icon="icon"
          @click="dateEnd"
        ></datepicker>
        <span>
          ~
          <span>{{ endDate }}</span>
        </span>
      </div>
    </div>
    <accordion-bottom class="fixed bottom-0 w-full" :menus="menu">
    </accordion-bottom>
  </div>
</template>

<script>
import AccordionSelect from "@/components/AccordionSelect";
import AccordionPeriod from "@/components/AccordionPeriod";
import AccordionBottom from "@/components/AccordionBottom";
import AccordionTest from "@/components/AccordionTest";
import Datepicker from "vuejs-datepicker";
import { en, ko } from "vuejs-datepicker/dist/locale";
import moment from "moment";
export default {
  components: {
    AccordionSelect,
    AccordionBottom,
    AccordionPeriod,
    AccordionTest,
    Datepicker
  },
  data() {
    return {
      period: 0,
      trainingType: "",
      periodType: "",
      type: "",
      menu: [
        {
          title: "To Do List",
          icon: "fa-suitcase"
        },
        {
          title: "게시판",
          icon: "fa-user-friends"
        },
        {
          title: "온라인 상담",
          icon: "fa-comment"
        }
      ],
      date: new Date(),
      ko: ko,
      en: en,
      endDate: new Date(),
      icon: "fas fa-chevron-left"
    };
  },
  methods: {
    handlePeriod(item) {
      this.period = Number(item);

      //하루동안의 운동 1개, 식단 1개 오브젝트 초기화
      let day = {
        train: this.workoutlist,
        diet: this.foodlist
      };

      let week = Array.from({ length: this.count }, () => day);
      //프로젝트 기간으로 커리큘럼 셋팅, period는 주(week)를 의미
      this.curriculum = [];
      for (let i = 0; i < this.period; i++) {
        this.curriculum.push(week);
      }
    },
    handleTrainingType(item) {
      this.trainingType = item;
    },
    handlePeriodType(item) {
      this.periodType = item;
    },
    handleType(item) {
      this.type = item;
    },
    dateFormatter(date) {
      return (this.date = moment(date).format("yyyy-MM-DD"));
    },
    dateEnd() {
      this.endDate = moment(this.date)
        .add(6, "M")
        .format("yyyy-MM-DD");
    }
  }
};
</script>
