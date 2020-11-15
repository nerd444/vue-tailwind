<template>
  <div>
    <div class="w-screen">
      <div class="flex">
        <div class="w-1/3 p-4">기간</div>
        <div class="w-2/3 px-4 py-2">
          <accordion-select-period
            :period="period"
            text="주 완성 프로젝트"
            :items="[3, 4, 5, 6, 0]"
            @clicked="handlePeriod"
          >
          </accordion-select-period>
        </div>
      </div>
    </div>
    <div class="w-screen">
      <div class="flex">
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
      </div>
    </div>
  </div>
</template>

<script>
import AccordionSelect from "@/components/AccordionSelect";
import AccordionSelectPeriod from "@/components/AccordionSelectPeriod";
export default {
  components: {
    AccordionSelect,
    AccordionSelectPeriod
  },
  data() {
    return {
      period: 0,
      trainingType: ""
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
    }
  }
};
</script>
