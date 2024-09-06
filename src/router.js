import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NetworkGraph from './pages/NetworkGraph.vue'
import Counter from './pages/Counter.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/network-graph', component: NetworkGraph },
  { path: '/counter', component: Counter }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
