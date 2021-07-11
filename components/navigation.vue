<template>
  <nav>
    <div class="nav">
      <div class="nav-back">
        <FontAwesomeIcon :icon="arrowLeft" />
      </div>
      <NuxtLink to="/lookbook" class="nav--link">
        Lookbook
      </NuxtLink>
      <NuxtLink to="/collection" class="nav--link">
        Collection
      </NuxtLink>
      <NuxtLink to="/about" class="nav--link">
        About
      </NuxtLink>
    </div>
    <!-- TODO nav close method
    best case toggle state in store
    -->
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default {
  components: { FontAwesomeIcon },
  data () {
    return {
      arrowLeft: faArrowLeft
    }
  }
}
</script>

<style scoped lang="scss">

.nav-back{
    color: black;
    text-decoration: none;
    font-size: 18px;
    padding: 20px 0 20px 0;
    border-bottom: 0.01px rgb(218, 218, 218) solid;
    padding-left: 15px;
    cursor: pointer;
}
.nav-back:hover{
    color: rgb(148, 0, 0);
}

.nav {
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: white;

  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 1s ease-in-out;

  width: 70vw;
  max-width: 500px;
  height: 100%;
  margin-top: -75px;
  filter: drop-shadow(0 0 0.75rem black);

  &--link {
    font-family: "ITC Franklin Gothic Std Book Condensed", "sans-serif";
    color: black;
    text-decoration: none;
    font-size: 16px;
    padding: 20px 0 20px 0;
    border-bottom: 0.01px rgb(218, 218, 218) solid;
    padding-left: 15px;
  }
  &--link:hover{
      color: rgb(148, 0, 0);
  }

  &--close-button {
    filter: drop-shadow(0 0 0.75rem black);
    position: absolute;
    z-index: 1;
    top: 15px;
    left: calc(70vw + 5px);
    width: 30px;
  }

  &--close {
    width: 20%;
    margin: auto;

    &--img {
      width: 75%;
    }
  }

  &--hidden {
    display: none;
  }

  &--logo {
    &--container {
      display: flex;
      flex-direction: row;
      padding: 15px 0 15px 15px;
      border-bottom: 0.01px rgb(218, 218, 218) solid;
    }
    &--logo-container {
      width: 70%;
      margin: auto;
    }

    &--img {
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .nav {
    &--close-button {
      left: calc(500px + 5px);
    }
  }
}

@media (min-width: 992px) {
    .nav {
        margin-top: -100px;

        &--close {
        cursor: pointer;
        }

        &--close-button {
        left: calc(500px + 10px);
        }
    }
}
</style>
