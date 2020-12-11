<template>
  <div>
    <div :class="divClass" class="w-full" @click.prevent="active = !active">
      <a class="no-underline" :class="font">
        <!-- <span>{{ title }}</span> -->
        <slot name="title" />
        <div v-if="shadow == true" class="inline-block">
          <span v-show="active"><i class="fas fa-chevron-up"></i></span>
          <span v-show="!active"><i class="fas fa-chevron-down"></i></span>
        </div>
      </a>
    </div>
    <div class="p-2" v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    font: String,
    divClass: String,
    shadow: {
      type: Boolean,
      default: false
    }
  },
  // ["title", "fontSize"],
  data() {
    return {
      active: false
    };
  }
};
</script>
