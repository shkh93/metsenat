import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
// import Login from '@/components/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
