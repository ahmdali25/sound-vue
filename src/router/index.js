import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Melodic Dubstep",
    },
  },
  {
    path: "/melodic-dubstep",
    name: "Melodic Dubstep",
    component: () => import("../views/MelodicDubstep.vue"),
  },
  {
    path: "/future-bass",
    name: "Future Bass",
    component: () => import("../views/FutureBass.vue"),
  },
  {
    path: "/progressive-house",
    name: "Progressive House",
    component: () => import("../views/ProgressiveHouse.vue"),
  },
  {
    path: "/dnb",
    name: "Drum and Bass",
    component: () => import("../views/DrumAndBass.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
