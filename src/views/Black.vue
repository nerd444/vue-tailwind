<template>
  <div class="pub__carousel" tabindex="-1">
    <div
      class="inline-block pb-5 overflow-x-auto scrolling-touch whitespace-nowrap disable-scrollbars"
    >
      <button
        v-for="(item, i) in data.workoutlist"
        :key="i"
        type="button"
        class="w-32 h-12 mr-3 text-lg font-bold text-center bg-white rounded-full shadow md:text-xl text-secondly-400"
      >
        운동{{ i + 1 }}
      </button>
      <button
        @click="addTrain(j)"
        type="button"
        class="w-20 h-12 mr-3 text-lg font-bold text-center bg-white rounded-full shadow md:text-xl text-secondly-400"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
