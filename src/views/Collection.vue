<template>
  <main>
    <div class="lookbook--content">
      <h1 class="flex h-center collection--title">Collection name</h1>
    </div>
    <div class="container">
      <div class="row">
        <!-- item -->
        <CollectionItem v-for="item in items" :key="item" />
      </div>
    </div>
  </main>
</template>

<script>
import CollectionItem from "../components/CollectionItem.vue"

export default {
  components: {
      CollectionItem
  },
  data () {
    return {
      items: [1,2,3,4,5]
    }
  }
}
</script>