<template>
  <div>
    <a
      href="#"
      @click="toggleActive"
      class="flex justify-center items-center text-white bg-blue-500 py-2 border rounded-t-2xl"
    >
      <span v-show="!active">&#9650;</span>
      <span v-show="active">&#9660;</span>
    </a>
    <div v-show="active" class="bg-blue-500">
      <div>
        <div class="flex flex-row justify-between items-center px-4 py-6">
          <div
            v-for="menu in menus"
            class="flex flex-col items-center text-lg font-bold text-white"
            :key="menu.title"
          >
            <i class="mb-2 text-2xl fas " :class="menu.icon"></i>
            <div>{{ menu.title }}</div>
          </div>
        </div>
      </div>
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
  methods: {
    toggleActive() {
      this.active = !this.active;
    }
  },
  props: {
    menus: Array
  }
};
</script>
