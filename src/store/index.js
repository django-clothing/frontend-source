import { createStore } from 'vuex';

const store = createStore({
    state: {
        cart: {}
    },
    mutations: {
        setCart(state, cart){
            state.cart = cart;
        }
    }
});

export default store;