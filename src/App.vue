<script setup>

import Ticker from './components/Ticker.vue';
import { createApi } from './api';

const { listByPrice } = createApi();

</script>

<template>
  <header class="container text-center my-4">
    <h1 class="display-4">Vite Crypto Ticker</h1>
    <hr />
  </header>

  <section class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="(item, i) in listByPrice" :key="i">
        <Ticker v-bind="item" />
      </div>
    </div>
  </section>
</template>