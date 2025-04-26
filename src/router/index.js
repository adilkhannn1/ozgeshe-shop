import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import ForgetPassword from '@/views/ForgetPasswordPage.vue'
import Register from '@/views/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'
import SearchPage from '@/views/SearchPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: Login,
      meta: {hideTopNav: true}
    },
    {
      path: '/forget',
      name: 'ForgetPasswordPage',
      component: ForgetPassword,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: Register,
      meta: {hideTopNav: true}
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    }
  ],
})

export default router
