<template>
  <div class="h-full flex flex-row">
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
    <accordion-bottom class="fixed bottom-0 bg-blue-500 w-full" :menus="menu">
    </accordion-bottom>
  </div>
</template>

<script>
import AccordionSelect from "@/components/AccordionSelect";
import AccordionBottom from "@/components/AccordionBottom";
export default {
  components: {
    AccordionSelect,
    AccordionBottom
  },
  data() {
    return {
      period: 0,
      trainingType: "",
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
      ]
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
