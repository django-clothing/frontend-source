import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Collection from '../views/Collection.vue'
import Cart from '../views/Cart.vue'
import Lookbook from '../views/Lookbook.vue'
import SingleItem from '../views/SingleItem.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/lookbook',
    name: 'Lookbook',
    component: Lookbook
  },
  {
    path: '/item',
    name: 'SingleItem',
    component: SingleItem
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
