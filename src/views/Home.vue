<template>
  <div class="w-screen">
    <accordion title="title">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        temporibus fugiat odit quaerat ratione voluptatem omnis. Est,
        blanditiis? Dolorum perferendis recusandae, temporibus veritatis
        consequuntur voluptatibus! Asperiores saepe doloremque cum minima.
      </p>
    </accordion>
    <accordion-select
      :title="period.show"
      :items="[
        { show: '3주 완성 프로젝트', value: 3 },
        { show: '4주 완성 프로젝트', value: 4 },
        { show: '5주 완성 프로젝트', value: 5 },
        { show: '6주 완성 프로젝트', value: 6 },
        { show: '직접입력', value: 7 }
      ]"
      @clicked="selectedPeriod"
    >
    </accordion-select>
    <div v-show="period.value === 7">
      <input type="text" v-model="period.value" />주 완성 프로젝트
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
import AccordionSelect from "@/components/AccordionSelect";
export default {
  components: {
    Accordion,
    AccordionSelect
  },
  data() {
    return {
      period: { show: "기간 선택", value: null }
    };
  },
  methods: {
    selectedPeriod(item) {
      this.period = item;
    }
  }
};
</script>
