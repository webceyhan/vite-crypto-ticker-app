<script setup>

import { ref } from 'vue';

const createSocket = (state) => {
  // define assets to be loaded
  const assets = [
    'bitcoin', 'ethereum', 'litecoin', 'solana',
    'polkadot', 'cardano', 'stellar', 'avax'
  ];

  // create url with query params
  const url = new URL('wss://ws.coincap.io/prices');
  url.search = new URLSearchParams({ assets });

  // create socket
  const socket = new WebSocket(url);

  // define message listener
  socket.onmessage = ({ data }) => {
    state.value = { ...state.value, ...JSON.parse(data) };
  };

  return socket;
}

const prices = ref([]);
const socket = createSocket(prices)

// format currency with commas
const formatCurrency = (value) => {
  return (new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })).format(value);
}


</script>

<template>
  <header class="container text-center my-5">
    <h1 class="display-4">Vite Crypto Ticker</h1>
    <hr />
  </header>

  <section class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="(price, symbol) in prices" :key="symbol">
        <div class="card text-light">
          <div class="row g-0">
            <div class="col">
              <div class="h5 bg-secondary m-0 p-3">{{ symbol }}</div>
            </div>
            <div class="col">
              <div class="bg-primary p-3">{{ formatCurrency(price) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

