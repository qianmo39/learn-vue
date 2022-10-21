import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./modules/moduleA";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  count: 0,
  students: [
    { id: 110, name: "jack", age: 12 },
    { id: 111, name: "pony", age: 16 },
    { id: 112, name: "kobe", age: 18 },
    { id: 113, name: "pite", age: 24 }
  ],
  info: {
    name: "Tony",
    age: 40,
    height: 1.62
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});

export default store;
