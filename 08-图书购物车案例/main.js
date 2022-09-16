const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        name: "算法导论",
        publishDate: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        name: "UNIX编程艺术",
        publishDate: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        name: "编程珠玑",
        publishDate: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        name: "代码大全",
        publishDate: "2006-3",
        price: 128.0,
        count: 1,
      },
    ],
  },
  computed: {
    totalPrice() {
      return this.books.reduce((pre, book) => pre + book.price, 0);
    },
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    },
  },
});
