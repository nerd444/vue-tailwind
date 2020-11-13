<template>
  <div>
    <div>
      <a
        class="flex justify-between p-2 no-underline cursor-pointer"
        @click.prevent="active = !active"
      >
        <span>{{ title }}</span>
        <span v-show="!active"><i class="fas fa-chevron-down"></i></span>
        <span v-show="active"><i class="fas fa-chevron-up"></i></span>
      </a>
    </div>
    <div v-show="active">
      <a
        v-for="item in items"
        :key="item.value"
        class="block px-4 py-2 cursor-pointer"
        @click="selected(item)"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    selected(item) {
      this.active = false;
      this.$emit("clicked", item);
    }
  }
};
</script>
