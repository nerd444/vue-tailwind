<template>
  <div class="w-screen">
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
    <div v-show="period.text === '직접 입력'">
      <input type="number" v-model.number="period.value" />
      <span>
        주 완성 프로젝트
      </span>
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
      period: { text: "기간 선택", value: "" }
    };
  },
  methods: {
    selectedPeriod(item) {
      this.period = item;
    }
  }
};
</script>
