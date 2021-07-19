<template>
  <header class="header">
    <div class="header--burger" onclick="toggleNav()">
      <img
          class="header--burger--img"
          src="img/icons/menu.svg"
          alt="navigation ausklappen"
      />
    </div>
    <div class="header--logo">
      <router-link to="/">
        <img
            class="header--logo--img"
            src="img/logo/logo_white.svg"
            alt="django main logo"
        />
      </router-link>
    </div>
    <div class="header--cart">
      <router-link to="/cart">
        <img
            class="header--cart--img"
            src="img/icons/shopping-cart.svg"
            alt="Warenkorb aufrufen"
        />
      </router-link>
    </div>
  </header>
  <nav>
    <div id="nav-sidebar" class="nav--hidden">
      <router-link to="/lookbook" class="nav--link">Lookbook</router-link>
      <router-link to="/collection" class="nav--link">Collection</router-link>
      <router-link to="/about" class="nav--link">About</router-link>
    </div>
    <img
        class="nav--hidden pointer"
        id="nav-close"
        src="img/icons/close.svg"
        alt="zurück"
        onclick="toggleNav()"
    />
  </nav>
  <router-view/>
  <footer class="footer footer--text">
    <ul class="text-white footer--list">
      <li class="textsize">
        <router-link class="text-white nodecoration" to="/support"
        >Support
        </router-link
        >
      </li>
      <li class="textsize">
        <router-link class="text-white nodecoration" to="/shipping"
        >Versand
        </router-link
        >
      </li>
      <li class="textsize">
        <router-link class="text-white nodecoration" to="/imprint"
        >Impressum
        </router-link
        >
      </li>
      <li class="textsize">
        <router-link class="text-white nodecoration" to="/privacy"
        >Datenschutz
        </router-link
        >
      </li>
    </ul>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.setUp();
  },
  methods: {
    async setUp() {
      var path = process.env.VUE_APP_SHOP_STORE_URL;
      console.log(path)
      // TODO: WHY IS PROCESS.ENV NOT WORKING?!

      //const contextResponse = await fetch(`${process.env.VUE_APP_SHOP_STORE_URL}/context`);
      //const contextResponse = await fetch(`http://localhost:8088/store-api/context`);
      const contextResponse = await axios.get(`http://localhost:8088/store-api/context`,
          {
            headers: {
              'sw-access-key': 'SWSCAUJB3N-I3ID1SEDCEJIXFQ'
            }
          });
      if (contextResponse.status !== 200) {
        console.error("Response failed");
      } else {
        const context = contextResponse;
        this.$store.state.contextToken = context.data.token;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
