<template>
  <div class="w-screen">
    <div class="flex">
      <div class="w-1/3 p-4">기간</div>
      <div class="w-2/3 px-4 py-2">
        <accordion-select
          :title="period.text"
          :items="[
            { text: '3주 완성 프로젝트', value: 3 },
            { text: '4주 완성 프로젝트', value: 4 },
            { text: '5주 완성 프로젝트', value: 5 },
            { text: '6주 완성 프로젝트', value: 6 },
            { text: '직접 입력', value: '' }
          ]"
          @clicked="selectedPeriod"
        >
        </accordion-select>
        <div v-show="period.text === '직접 입력'" class="flex p-2">
          <input
            type="number"
            v-model="tempPeriod"
            class="w-1/6 mr-2 border border-gray-400 rounded-md"
          />
          <span class="w-3/6">
            주 완성 프로젝트
          </span>
          <button class="w-2/6" @click.prevent="typedPeriod">
            완료
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionSelect from "@/components/AccordionSelect";
export default {
  components: {
    AccordionSelect
  },
  data() {
    return {
      period: { text: "기간 선택", value: "" },
      tempPeriod: ""
    };
  },
  methods: {
    selectedPeriod(item) {
      this.period = item;

      //하루동안의 운동 1개, 식단 1개 오브젝트 초기화
      let day = {
        train: this.workoutlist,
        diet: this.foodlist
      };

      let week = Array.from({ length: this.count }, () => day);
      let period = 0;
      period = this.period.value;
      //프로젝트 기간으로 커리큘럼 셋팅, period는 주(week)를 의미
      this.curriculum = [];
      for (let i = 0; i < period; i++) {
        this.curriculum.push(week);
      }
    },
    typedPeriod() {
      let day = {
        train: this.workoutlist,
        diet: this.foodlist
      };
      let week = Array.from({ length: this.count }, () => day);
      let period = 0;
      period = this.tempPeriod;
      this.curriculum = [];
      for (let i = 0; i < period; i++) {
        this.curriculum.push(week);
      }
    }
  }
};
</script>
