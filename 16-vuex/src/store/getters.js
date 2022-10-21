export default {
  powerCount(state) {
    return state.count * state.count;
  },
  greaterAgesStus(state) {
    return state.students.filter(s => s.age >= 18);
  },
  greaterAgesCount(state, getters) {
    return getters.greaterAgesStus.length;
  },
  stuById(state) {
    return id => state.students.find(s => s.id === id);
  }
};
