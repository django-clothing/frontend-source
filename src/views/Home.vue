<template>
  <main>
        <div class="hero">
            <picture class="hero--picture">
                <source media="(max-width: 768px)" srcset="img/hero/hero-mobile.webp">
                <source media="(min-width: 769px)" srcset="img/hero/hero-desktop.webp">
                <img class="hero--img" src="img/hero/hero-mobile.webp" alt="hero header">
            </picture>
        </div>
    </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
