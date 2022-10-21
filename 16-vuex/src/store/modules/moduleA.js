export default {
  state: {
    name: "Jack"
  },
  mutations: {
    updateName(state, payload) {
      console.log(payload);
      state.name = payload;
    }
  },
  getters: {
    fullName(state) {
      return state.name + "111";
    },
    fullName1(state, getters) {
      return getters.fullName + "222";
    },
    fullName2(state, getters, rootState) {
      return getters.fullName1 + rootState.count;
    }
  },
  actions: {
    updateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit("updateName", "Rick");
      }, 1000);
    }
  }
};
