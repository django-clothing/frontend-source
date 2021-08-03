import { createStore } from 'vuex';

const store = createStore({
    state: {
        cart: {},
        contextToken: '',
        cartSize: 0
    },
    mutations: {
        setCart(state, cart){
            state.cart = cart;
        }
    }
});

export default store;
