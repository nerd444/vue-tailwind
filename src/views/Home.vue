<template>
  <div class="w-screen bg-gray-400">
    <accordion title="제목">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        temporibus fugiat odit quaerat ratione voluptatem omnis. Est,
        blanditiis? Dolorum perferendis recusandae, temporibus veritatis
        consequuntur voluptatibus! Asperiores saepe doloremque cum minima.
      </p>
      <p class="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        temporibus fugiat odit quaerat ratione voluptatem omnis. Est,
        blanditiis? Dolorum perferendis recusandae, temporibus veritatis
        consequuntur voluptatibus! Asperiores saepe doloremque cum minima.
      </p>
    </accordion>
    <div>나는 밀릴거야!</div>

    <form>
      <input type="text" />
      <input type="submit" @click.prevent="alert" />
    </form>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  components: {
    Accordion
  },
  methods: {
    alert() {
      alert("새로고침 ㄴ");
    }
  }
};
</script>
