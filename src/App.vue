<script setup>

import { createApi } from './api';
import { formatCurrency } from './utils';

const { state } = createApi();

</script>

<template>
  <header class="container text-center my-5">
    <h1 class="display-4">Vite Crypto Ticker</h1>
    <hr />
  </header>

  <section class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="(price, symbol) in state" :key="symbol">
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

