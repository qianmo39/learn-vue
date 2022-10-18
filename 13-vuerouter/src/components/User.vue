<template>
  <div>
    <h2>User</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus quod
      numquam sit laudantium perspiciatis sed asperiores veritatis natus? Velit
      possimus mollitia aspernatur sint provident doloremque. Quod suscipit
      incidunt qui.
    </p>
    <h2>{{ $route.params.userId }}</h2>
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  created() {
    console.log("user created");
  },
  destroyed() {
    console.log("user destroyed");
  },
};
</script>

<style>

</style>
