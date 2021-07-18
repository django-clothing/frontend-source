import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Collection from '../views/Collection.vue';
import Cart from '../views/Cart.vue';
import Lookbook from '../views/Lookbook.vue';
import Product from '../views/Product.vue';


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
        path: '/product/:id',
        name: 'Product',
        component: Product
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
