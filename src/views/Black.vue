<template>
  <div>
    <div
      class="inline-block pb-5 overflow-x-auto scrolling-touch whitespace-nowrap disable-scrollbars"
    >
      <button
        v-for="(item, i) in data"
        :key="i"
        type="button"
        class="w-32 h-12 mr-3 text-lg font-bold text-center bg-white rounded-full shadow md:text-xl text-secondly-400"
      >
        운동{{ i + 1 }}
      </button>
      <button
        @click="addData"
        type="button"
        class="w-20 h-12 mr-3 text-lg font-bold text-center bg-white rounded-full shadow md:text-xl text-secondly-400"
      >
        +
      </button>
    </div>
    <button @click="minusData" class="block text-basicOrange font-semibold">
      삭제
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 0
    };
  },
  methods: {
    addData() {
      this.data = this.data + 1;
    },
    minusData() {
      this.data = this.data - 1;
    }
  }
};
</script>

<style></style>
