<template>
  <div>
    <div>
      <div v-show="input" class="bg-blue-400 flex justify-between">
        <input
          type="text"
          v-model="typeInput"
          class="border border-gray-400 rounded-md"
        />
        <button @click.prevent="typedPeriod">
          완료
        </button>
      </div>
      <a
        class="bg-blue-400 flex justify-between p-2 no-underline cursor-pointer"
        @click.prevent="active = !active"
        v-show="!input"
      >
        <span v-show="type">{{ type }}</span>
        <span v-show="!type">{{ text }}</span>
        <span v-show="active">&#9650;</span>
        <span v-show="!active">&#9660;</span>
      </a>
    </div>
    <div v-show="active">
      <a
        v-for="item in items"
        :key="item"
        class="block px-4 py-2 cursor-pointer"
        @click="selected(item)"
      >
        <span v-show="!item">
          직접 입력
        </span>
        <span v-show="item">{{ item }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    items: Array,
    isInput: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      active: false,
      typeInput: "",
      input: false
    };
  },
  methods: {
    selected(item) {
      this.active = false;
      if (!item) {
        this.input = true;
      }
      this.$emit("clicked", item);
    },
    typedPeriod() {
      this.input = false;
      this.$emit("clicked", this.typeInput);
    }
  }
};
</script>
