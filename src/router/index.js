import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '@/components/DefaultLayout.vue'
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Todo from '@/views/Todo.vue'

const routes = [
  {
    path: '/dashboard',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/todo',
        component: Todo
      }
    ]
  },
  {
    path: '/auth',
    children: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
    ]
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
