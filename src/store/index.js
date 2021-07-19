import { createStore } from 'vuex';

const store = createStore({
    state: {
        cart: {},
        contextToken: ''
    },
    mutations: {
        setCart(state, cart){
            state.cart = cart;
        }
    }
});

export default store;
