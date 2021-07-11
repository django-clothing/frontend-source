<template>
  <header class="header">
    <!-- TODO: toggle nav!
    best case toggle state in store
     -->
    <div class="header--burger" onclick="toggleNav()">
      <img class="header--burger--img" src="img/icons/menu.svg" alt="navigation ausklappen">
    </div>
    <div class="header--logo">
      <NuxtLink to="/" style="color:white">
        {{ title }}
      </NuxtLink>
    </div>
    <div class="header--cart">
      <NuxtLink :to="cartLink" style="color:white">
        <img class="header--cart--img" src="img/icons/shopping-cart.svg" alt="Warenkorb aufrufen">
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    cartLink: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  align-items: center;
  background-color: #212121;

  &--burger {
    padding-left: 15px;
    &--img {
      width: 25px;
      height: 25px;
    }
  }

  &--logo {
    height: 50%;
    display: flex;
    align-items: center;
  }

  &--cart {
    padding-right: 15px;

    &--img {
      width: 25px;
      height: 25px;
    }
  }
}

@media (min-width: 992px) {
  .header {
    justify-content: space-around;
    height: 100px;

    &--burger {
      padding-left: 0;

      &--img {
        width: 35px;
        height: 35px;
      }
    }
    &--burger:hover {
      cursor: pointer;
    }

    &--logo:hover {
      cursor: pointer;
    }

    &--cart {
      padding-right: 0;

      &--img {
        width: 35px;
        height: 35px;
      }
    }
    &--cart:hover {
      cursor: pointer;
    }
  }
}
</style>
