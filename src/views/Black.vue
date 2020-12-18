<template>
  <div class="w-64 py-5">
    <div class="w-64">
      <div class="inline-block pb-5 overflow-x-hidden whitespace-no-wrap">
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
      <button
        @click="minusData"
        class="block mt-4 font-semibold text-basicOrange"
      >
        삭제
      </button>
    </div>
    <!-- <div class="pub__scroll-indicator">
      <span class="pub__scroll-indicator__bar-wrapper">
        <span
          class="pub__scroll-indicator__bar"
          style="width: 29.3633%; transform: translateX(240.562%);"
        >
        </span>
      </span>
    </div> -->
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

<style>
/* .pub__scroll-indicator {
  height: 1.5rem;
  position: relative;
  width: 100%;
  outline: none;
  border: 0;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.pub__scroll-indicator__bar-wrapper {
  width: 100%;
  background: #dfdfdf;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  height: 0.125rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: block;
  border-radius: 4px;
}

.pub__scroll-indicator__bar {
  will-change: transform;
  background: #111;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 0.125rem;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: block;
  border-radius: 4px;
  cursor: -webkit-grab;
  cursor: grab;
}

.pub__scroll-indicator--dragging .pub__scroll-indicator__bar-wrapper,
.pub__scroll-indicator--dragging .pub__scroll-indicator__bar,
.pub__scroll-indicator:hover .pub__scroll-indicator__bar-wrapper,
.pub__scroll-indicator:hover .pub__scroll-indicator__bar {
  height: 0.25rem;
}
.pub__scroll-indicator--dragging .pub__scroll-indicator__bar,
.pub__scroll-indicator--dragging .pub__scroll-indicator__bar:hover {
  height: 0.5rem;
  top: -0.125rem;
}
.pub__scroll-indicator--dragging .pub__scroll-indicator__bar-wrapper,
.pub__scroll-indicator--dragging .pub__scroll-indicator__bar,
.pub__scroll-indicator:hover .pub__scroll-indicator__bar-wrapper,
.pub__scroll-indicator:hover .pub__scroll-indicator__bar {
  height: 0.25rem;
}
.pub__scroll-indicator__bar-dragging {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

.pub__carousel__content {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding-top: 0.25rem;
  padding-bottom: 1.5rem;
} */
</style>
