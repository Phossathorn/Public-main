import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
{
  path: '/Product',
  name: 'Product',
  component: () => import('../views/Product.vue')
},
{
  path: '/Contact',
  name: 'Contact',
  component: () => import('../views/Contact.vue')
},
{
  path: '/Productdetail',
  name: 'AdProductdetail',
  component: () => import('../views/Productdetail.vue')
},
{
  path: '/Login',
  name: 'Login',
  component: () => import('../views/Login.vue')
},
{
  path: '/Admin',
  name: 'Admin',
  component: () => import('../views/Admin.vue')
},
{
  path: '/Dashboard',
  name: 'Dashboard',
  component: () => import('../views/Dashboard.vue')
},
{
  path: '/Order',
  name: 'Order',
  component: () => import('../views/Order.vue')
},
{
  path: '/Addproduct',
  name: 'Addproduct',
  component: () => import('../views/Addproduct.vue')
},
{
  path: '/Stock',
  name: 'Stock',
  component: () => import('../views/Stock.vue')
},
{
  path: '/Singup',
  name: 'Singup',
  component: () => import('../views/Singup.vue')
},
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
