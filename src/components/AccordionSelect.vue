<template>
  <div>
    <div>
      <a
        class="p-4 block bg-gray-600 hover:bg-gray-800 no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <span>{{ title }}</span>
        <span v-show="!active">&#9660;</span>
        <span v-show="active">&#9650;</span>
      </a>
    </div>
    <div v-show="active">
      <a
        v-for="item in items"
        :key="item.value"
        class="px-4 py-2 block"
        @click="selected(item)"
      >
        {{ item.show }}
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
