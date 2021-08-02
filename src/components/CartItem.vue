<template>
  <div class="mt-50 row">
    <div class="col-6 col-md-3">
      <!-- item picture -->
      <img
          class="collection-item--img"
          :src="item.cover.url"
          alt=""
      />
    </div>
    <div class="col-6 col-md-3">
      <!-- description -->
      <h2 class="bold cart--full-width-headline">{{item.label}}</h2>
    </div>
    <div class="col-12 col-md-3">
    </div>
    <div class="col-12 col-md-3">
      <h2 class="bold cart--full-width-headline cart--bottom-rocker">
        Preis
      </h2>
      <p class="text-align-center bold">{{item.price.totalPrice}}€</p>
      <!-- price -->
    </div>
    <hr class="cart--full-width"/>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
}
</script>

<style scoped>

</style>
