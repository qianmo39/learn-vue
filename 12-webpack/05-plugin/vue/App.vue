<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">button</button>
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello, Webpack",
      name: "Jack",
    };
  },
  methods: {
    btnClick() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
  .title {
    color: green;
  }
</style>