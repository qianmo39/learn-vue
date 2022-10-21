import Vue from "vue";
import * as types from "./mutations-types";

export default {
  [types.INCREMENT](state) {
    state.count++;
  },
  [types.DECREMENT](state) {
    state.count--;
  },
  addCount(state, payload) {
    console.log(payload);
    state.count += payload.count;
  },
  addStu(state, stu) {
    state.students.push(stu);
  },
  updateInfo(state) {
    Vue.set(state.info, "address", "Los Angeles");
    Vue.delete(state.info, "age");
  }
};
