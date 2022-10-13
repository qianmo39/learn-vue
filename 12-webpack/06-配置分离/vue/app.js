export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">button</button>
      <h3>{{name}}</h3>
    </div>
  `,
  data() {
    return {
      message: "Hello, Webpack",
      name: "Jack",
    };
  },
  methods: {
    btnClick() {
      console.log("hello");
    },
  },
};
