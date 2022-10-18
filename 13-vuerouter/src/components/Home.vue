<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dignissimos
      libero dolore, repellat omnis, vitae officiis nobis nulla, fugiat ut
      molestias facilis maiores maxime quo! Quod in possimus ullam vitae.
    </p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    }
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    console.log("activated");
    this.$router.push(this.path);
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>
