<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">home</router-link>
    <router-link to="/about" tag="button" replace active-class="active">about</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" tag="button" replace>about</router-link> -->
    <!-- <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button> -->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link :to="'/user/' + userId">User</router-link>
    <router-link :to="{path: '/profile',query: {name: 'Jack', age: 24, height: 1.78 }}">Profile</router-link> -->
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "jack"
    };
  },
  methods: {
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "Jack",
          age: 24,
          height: 1.82
        }
      })
    }
  }
};
</script>

<style>
/* .router-link-active {
  color: #f00;
} */

.active {
  color: #f00;
}
</style>
