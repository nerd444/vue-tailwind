<template>
  <div>
    <div>
      <a
        class="p-4 block bg-gray-600 hover:bg-gray-800 no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <strong>{{ title }}</strong>
        <span v-show="!active">down</span>
        <span v-show="active">&#9650;</span>
      </a>
    </div>
    <div class="p-2" v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      active: false
    };
  }
};
</script>
