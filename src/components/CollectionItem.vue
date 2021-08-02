<template>
  <div class="col-6 col-md-3 flex-column collection-item">
          <router-link class="text-black nodecoration" :to="`/product/${item._uniqueIdentifier}`">
            <div class="flex h-center" style="background-color: green">
              <img
                class="collection-item--img"
                :src="item.cover.media.url"
                alt=""
              />
            </div>
            <h2 class="collection-item--name">{{item.translated.name}}</h2>
            <p>{{ item.calculatedPrice.totalPrice }}€</p>
          </router-link>
        </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  mounted() {
  }

}
</script>

<style>

</style>