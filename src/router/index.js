import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Whatwedo from "../components/Whatwedo.vue";
import digitaldivide from "../components/digitaldivide.vue";
import GetInvolved from "../components/GetInvolved.vue";
import Network from "../components/Network.vue";
import Insights from "../components/Insights.vue";
import test from "../components/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Whatwedo",
    name: "Whatwedo",
    component: Whatwedo
  },
  {
    path: "/digitaldivide",
    name: "digitaldivide",
    component: digitaldivide
  },
  {
    path: "/GetInvolved",
    name: "GetInvolved",
    component: GetInvolved
  },
  {
    path: "/Network",
    name: "Network",
    component: Network
  },
  {
    path: "/Insights",
    name: "Insights",
    component: Insights
  },
  {
    path: "/test",
    name: "test",
    component: test
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes
});

export default router;
