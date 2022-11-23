import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/About.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/Cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../components/Checkout.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: () => import('../components/Warehouse.vue'),
        children: [
          {
            path: '/receiving',
            name: 'receiving',
            component: () => import('../components/Receiving.vue')
          },
          {
            path: '/orders',
            name: 'orders',
            component: () => import('../components/Orders.vue')
          }
        ]
      }
  ]
})

export default router
