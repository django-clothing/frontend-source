<template>
  <main>
    <div class="lookbook--content">
      <h1 class="flex h-center collection--title">Collection name</h1>
    </div>
    <div class="container">
      <div class="row">
        <!-- item -->
        <CollectionItem :item="item" v-for="item in products" :key="item" />
      </div>
    </div>
  </main>
</template>

<script>
import CollectionItem from "../components/CollectionItem.vue"
import post from "../assets/post";

export default {
  components: {
      CollectionItem
  },
  data () {
    return {
      products: []
    }
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts () {
      const headers = {
        'sw-access-key': `${process.env.VUE_APP_API_KEY}`,
      }
      const allProductResponse = await post(`${process.env.VUE_APP_SHOP_STORE_URL}/product`,{},headers );
      const allProducts = allProductResponse.elements;

      let filteredProducts = [];

      allProducts.forEach(element => {
        if(element._uniqueIdentifier === element.mainVariantId || element.mainVariantId == null ){
          filteredProducts.push(element);
        }
      });
      this.products = filteredProducts
    }
  }
}
</script>