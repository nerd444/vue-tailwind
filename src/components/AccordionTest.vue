<template>
  <div>
    <div @click.prevent="active = !active" class="border rounded-lg px-4 py-2">
      <a v-show="!active" href="">
        <span v-show="selectItem">
          {{ selectItem }}
        </span>
        <span v-show="!selectItem">{{ items[0] }}</span>
      </a>
      <a
        v-show="active"
        href=""
        v-for="item in items"
        :key="item"
        class="block cursor-pointer border-b py-2"
        @click="selected(item)"
      >
        <span>{{ item }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  props: {
    items: Array,
    selectItem: String
  },
  methods: {
    selected(item) {
      this.$emit("clicked", item);
      this.active = true;
    }
  }
};
</script>
