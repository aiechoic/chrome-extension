import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/views/pages/Home.vue'
import About from '@/views/pages/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})