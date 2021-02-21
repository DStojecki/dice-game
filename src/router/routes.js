import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Game from "../components/Game.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/rules",
    name: "home",
    component: Home
  },
  {
    path: "/",
    name: "game",
    component: Game,
      
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
