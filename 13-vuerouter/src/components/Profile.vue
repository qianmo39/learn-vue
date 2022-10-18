<template>
  <div>
    <h2>Profile</h2>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
    <h3>{{$route.query.height}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("profile created");
  },
  destroyed() {
    console.log("profile destroyed");
  },
};
</script>
