import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home";
import partners from "@/views/partners";
import lock from "@/views/lock";
import task from "@/views/task";
import nft from "@/views/nft";


Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "主页",
    component: home,
  },
  {
    path: "/partners",
    name: "友情合作商",
    component: partners,
  },
  {
    path: "/lock",
    name: "锁仓",
    component: lock,
  },
  {
    path: "/task",
    name: "任务",
    component: task,
  },
  {
    path: "/nft",
    name: "NFT",
    component: nft,
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //这里就是scrollBehavior：当路由切换时可以让页面滚到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
