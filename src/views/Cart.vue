<template>
  <main>
    <div class="lookbook--content">
      <h1 class="flex h-center collection--title">Warenkorb</h1>
    </div>
    <div class="container">
      <CartItem :item="item" v-for="item in this.$store.state.cart.lineItems" :key="item"/>
    </div>
    <div class="container">
      <button class="item--add-to-cart pointer mb-50">Checkout</button>
    </div>
  </main>
</template>
<script>
import CartItem from "@/components/CartItem";
export default {
  components: {CartItem}
}
</script>
