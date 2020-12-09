<template>
  <div class="w-screen flex flex-wrap flex-col relative">
    <!-- <h1 class="h-full text-center my-4 text-3xl">Slider</h1> -->
    <div
      class="absolute w-full"
      v-for="(image, index) in sliders"
      :key="image"
      style="height: 300px;"
    >
      <transition name="fade">
        <img
          v-if="currentSlide === index"
          :src="image"
          alt=""
          style="height: 650px; width: 100%;"
        />
        <video
          autoplay="true"
          muted="true"
          loop
          playsinline
          style="width: 700px; height: 100%"
        >
          <source src="@/assets/weet.mp4" />
        </video>
      </transition>
    </div>
    <div style="height: 650px; width: 100%;">
      <div class="absolute bottom-0 flex justify-center w-full mb-6">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex">
      <div class="m-auto text-center my-4 text-3xl">
        <transition name="fade">
          <h1 v-show="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 border text-xl rounded-lg"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: [
        require("@/assets/image1.jpg"),
        require("@/assets/image2.jpg"),
        require("@/assets/image3.jpg"),
        require("@/assets/image4.jpg")
      ],
      interval: "",
      isTitleShowing: true
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 3 ? 0 : this.currentSlide + 1;
      // 방법은 이거 기준 위 아래 두가지
      // if (this.currentSlide == 3) {
      //   this.currentSlide = 0;
      // } else {
      //   this.currentSlide++;
      // }
    }, 2000);
  },
  // 이 페이지에 다시 들어왔을경우, 처음부터 다시 슬라이드
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
