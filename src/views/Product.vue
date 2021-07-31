<template>
  <main v-if="item">
    <h1>{{ id }}</h1>
    <div class="container">
      <div class="row">
        <div class="item--top-spacer col-12 col-sm-6">
          <img
              class="width-100"
              :src="item.product.cover.media.url"
              alt="produktbild"
          />
        </div>
        <div class="col-12 col-sm-6">
          <div class="item--top-spacer">
            <h2 class="collection--title">{{ item.product.translated.name }}</h2>
            <h3 class="item--description--title">Beschreibung</h3>
            <ul class="item--description--list">
              {{ item.product.translated.description }}
            </ul>
            <section class="item--top-spacer flex justify-content-center">
              <button :id="variant.id" v-bind:class="[selectedVariant !== null && selectedVariant.optionIds.includes(variant.id) ? 'item--size--active': 'item--size--inactive']"
                      class="pointer m-10"
                      :key="variant.id"
                      v-for="variant in variants"
                      @click="loadVariant(variant._uniqueIdentifier)"
              >{{ variant.name }}
                <br/>
              </button>
            </section>
            <section>
              <button v-if="true" class="item--add-to-cart pointer" @click="addToCart">add to cart</button>
              <button v-if="false" style="background: red" class="item--add-to-cart">out of stock</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import post from "../assets/post";

export default {
  data() {
    return {
      item: '',
      variants: [],
      id: null,
      selectedVariant: null
    }
  },
  watch: {
    "$route": "setup"
  },
  methods: {
    async loadVariant(optionId){
      const headers = {
        'sw-access-key': `SWSCAUJB3N-I3ID1SEDCEJIXFQ`,
      };
      const allProductResponse = await post(`${process.env.VUE_APP_SHOP_STORE_URL}/product`,{},headers );
      const allProducts = allProductResponse.elements;

      const possibleSelection = [];
      allProducts.forEach(element => {
        if((element.optionIds === null || !element.optionIds.includes(optionId)) ||
        (element._uniqueIdentifier !== this.$route.params.id && element.mainVariantId !==  this.$route.params.id)){
          return false;
        }
          possibleSelection.push(element);
      });

      if(possibleSelection.length > 1 ){
        return false;
      }
      this.selectedVariant = possibleSelection[0];
    },
    async fetchSingleProduct(productId) {
      const headers = {
        'sw-access-key': `SWSCAUJB3N-I3ID1SEDCEJIXFQ`,
      }
      this.item = await post(`${process.env.VUE_APP_SHOP_STORE_URL}/product/${productId}`, {}, headers);
    },
    async getVariants() {
      const options = this.item.configurator[0].options;
      options.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.variants = options;
    },
    async setup (productId) {
      await this.fetchSingleProduct(productId);
      await this.getVariants(productId);
    },
    async addToCart() {
      if (this.selectedVariant !== null) {
        const headers = {
          'Content-Type': 'application/json',
          'sw-access-key': `SWSCAUJB3N-I3ID1SEDCEJIXFQ`,
          'sw-context-token': this.$store.state.contextToken
        }
        debugger; // eslint-disable-line no-debugger
        const payload = {
          items: [{
            type: 'product',
            referencedId: this.selectedVariant._uniqueIdentifier
          }]
        }
        this.$store.state.cart = await post(`${process.env.VUE_APP_SHOP_STORE_URL}/checkout/cart/line-item`, payload, headers);
        this.selectedVariant = null;
      }
    }
  },
  beforeMount() {
    this.setup(this.$route.params.id);
  }
}
</script>

<style>
</style>