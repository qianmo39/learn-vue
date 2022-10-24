import Vue from "vue";
import App from "./App";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

// axios({
//   url: "http://localhost:3000/home/multidata"
//   // method: "post"
// }).then(res => {
//   console.log(res);
// });

// axios
//   .get("http://localhost:3000/home/data", {
//     params: {
//       type: "pop",
//       page: 1
//     }
//   })
//   .then(res => {
//     console.log(res);
//   });

// axios
//   .all([
//     axios({
//       url: "http://localhost:3000/home/multidata"
//     }),
//     axios({
//       url: "http://localhost:3000/home/data",
//       params: {
//         type: "sell",
//         page: 3
//       }
//     })
//   ])
//   .then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   });

// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.timeout = 5000;

// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 4
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

// const instance1 = axios.create({
//   baseURL: "http://localhost:3000",
//   timeous: 5000
// });

// instance1({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res);
// });

// instance1({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// });

// const instance2 = axios.create({
//   baseURL: "http://localhost:3000",
//   timeout: 10000
// });

// instance2({
//   url: "/category"
// }).then(res => {
//   console.log(res);
// });

import { request } from "./network/request";

request({
  url: "/home/multidata"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
