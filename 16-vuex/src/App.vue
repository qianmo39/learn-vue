<template>
  <div id="app">
    <h2>modules</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">change</button>
    <h3>{{$store.getters.fullName}}</h3>
    <h3>{{$store.getters.fullName1}}</h3>
    <h3>{{$store.getters.fullName2}}</h3>
    <button @click="asyncUpdateName">async change</button>
    <h2>App</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">change</button>
    <h3>{{$store.state.count}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">AddStu</button>
    <h2>getters</h2>
    <h3>{{$store.getters.powerCount}}</h3>
    <h3>{{$store.getters.greaterAgesStus}}</h3>
    <h3>{{$store.getters.greaterAgesCount}}</h3>
    <h3>{{$store.getters.stuById(112)}}</h3>
    <h2>Hello Vuex</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import * as types from "./store/mutations-types"

export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    addition() {
      this.$store.commit(types.INCREMENT)
    },
    subtraction() {
      this.$store.commit(types.DECREMENT)
    },
    addCount(count) {
      this.$store.commit({
        type: 'addCount',
        count,
        message: 'hello'
      })
    },
    addStu() {
      const stu = { id: 200, name: "mowgli", age: 30 }
      this.$store.commit('addStu', stu)
    },
    updateInfo() {
      this.$store.dispatch("updateInfo", "message").then(res => {
        console.log("commit success");
        console.log(res);
      })
    },
    updateName() {
      this.$store.commit("updateName", "Tony")
    },
    asyncUpdateName() {
      this.$store.dispatch("updateName")
    }
  },
  components: {
    HelloVuex,
  }
}
</script>
