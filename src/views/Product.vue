<template>
  <main>
    <h1>{{ id }}</h1>
    <div class="container">
      <div class="row">
        <div class="item--top-spacer col-12 col-sm-6">
          <img
              class="width-100"
              src="https://placeimg.com/250/320/animals"
              alt="produktbild"
          />
        </div>
        <div class="col-12 col-sm-6">
          <div class="item--top-spacer">
            <h2 class="collection--title">Artikelname der ist lang</h2>
            <h3 class="item--description--title">Beschreibung</h3>
            <ul class="item--description--list">
              <li>Sieht super aus</li>
              <li>Baumwolle</li>
              <li>Sexy As Fuck</li>
              <li>Riecht nur ein bisschen nach chemie</li>
              <li>oder auch nicht</li>
              <li>ist auch egal</li>
              <li>llolololo</li>
            </ul>
            <section class="item--top-spacer flex justify-content-center">
              <button :id="variant.id" class="item--size--inactive pointer m-10" @click="selectVariant(variant)"
                      :key="variant.id"
                      v-for="variant in variants">{{ variant.name }}
              </button>
            </section>
            <section>
              <button class="item--add-to-cart pointer">add to cart</button>
            </section>
          </div>
        </div>
      </div>
    </div>
    <button @click="commitCart">commit</button>
    <button @click="printCart">print</button>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      variants: [
        {id: 1, name: "S"},
        {id: 2, name: "M"},
        {id: 3, name: "L"},
        {id: 4, name: "XL"}
      ],
      id: null,
      selectedVariant: null
    }
  },
  methods: {
    selectVariant(variant) {
      this.selectedVariant = variant;
      this.variants.forEach(v => {
        let variantPicker = document.getElementById(v.id);
        if (variantPicker.classList.contains("item--size--inactive") && variantPicker.innerHTML === this.selectedVariant.name) {
          variantPicker.classList.add("item--size--active");
          variantPicker.classList.remove("item--size--inactive");
        } else {
          variantPicker.classList.add("item--size--inactive");
          variantPicker.classList.remove("item--size--active");
        }
      })
    },
    logging() {
    },
    commitCart(){
      const newCart = {name: "a new cart"};
      this.$store.state.cart = newCart;
    },
    printCart(){
      this.cart.name = "toll";

      this.$store.state.cart = this.cart;
    }
  },
  computed: mapState({
    cart: state => state.cart
  }),
  watch: {
    '$route': 'loggin'
  },
  mounted() {
    this.logging();
  }
};
</script>

<style>
</style>