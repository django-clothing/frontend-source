<template>
  <div class="col-6 col-md-3 flex-column collection-item">
          <router-link class="text-black nodecoration" to="/product/1">
            <div class="flex h-center" style="background-color: green">
              <img
                class="collection-item--img"
                src="https://placeimg.com/250/320/animals"
                alt=""
              />
            </div>
            <h2 class="collection-item--name">{{item.translated.name}}</h2>
            <p>299.99€</p>
          </router-link>
        </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  mounted() {
    console.log(this.item);
  }

}
</script>

<style>

</style>