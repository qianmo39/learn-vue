import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import User from "../components/User.vue";

const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "Home"
    },
    children: [
      // {
      //   path: "",
      //   redirect: "news"
      // },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About"
    }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "User"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "Profile"
    },
    beforeEnter(to, from, next) {
      // console.log("before profile");
      next();
    }
  }
];

const router = new Router({
  routes,
  mode: "history",
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  // console.log("before");
  next();
});

router.afterEach((to, from) => {
  // console.log("after");
});

export default router;
