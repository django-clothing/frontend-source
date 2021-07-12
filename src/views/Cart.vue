<template>
  <main>
    <div class="lookbook--content">
      <h1 class="flex h-center collection--title">Warenkorb</h1>
    </div>
    <div class="container">
      <div class="mt-50 row">
        <div class="col-6 col-md-3">
          <!-- item picture -->
          <img
            class="collection-item--img"
            src="https://placeimg.com/250/320/animals"
            alt=""
          />
        </div>
        <div class="col-6 col-md-3">
          <!-- description -->
          <h2 class="bold cart--full-width-headline">Beschreibung mit Größe</h2>
          <p class="text-align-center">some crazy shit</p>
        </div>
        <div class="col-12 col-md-3">
          <!-- quantity -->
          <h2 class="bold cart--full-width-headline cart--bottom-rocker">
            Anzahl
          </h2>
          <input
            class="cart--full-width"
            id="uuid_quantity"
            type="number"
            min="0"
            max="5"
            value="1"
          />
        </div>
        <div class="col-12 col-md-3">
          <h2 class="bold cart--full-width-headline cart--bottom-rocker">
            Preis
          </h2>
          <p class="text-align-center bold">299.99€</p>
          <!-- price -->
        </div>
        <hr class="cart--full-width" />
      </div>
    </div>
    <div class="container">
      <button class="item--add-to-cart pointer mb-50">Checkout</button>
    </div>
  </main>
</template>