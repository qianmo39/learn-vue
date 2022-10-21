export default {
  updateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit("updateInfo");
      console.log(payload);
      resolve("hello");
    });
  }
};
