const { add, mul } = require("./js/math.js");

console.log(add(10, 10));
console.log(mul(10, 10));

import { name, age, height } from "./js/info";

console.log(name, age, height);

require("./css/normal.css");
require("./css/style.less");

import Vue from "vue";
// import App from "../vue/app.js";
import App from "../vue/App.vue";

new Vue({
  el: "#app",
  template: `<App />`,
  components: {
    App,
  },
});

document.writeln("<button>hello</button>");
