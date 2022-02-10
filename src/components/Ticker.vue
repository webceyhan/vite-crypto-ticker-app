<script setup>

import { formatCurrency } from '../utils';

defineProps({
    symbol: String,
    price: Number
})

</script>

<template>
    <div class="card text-light">
        <div class="row g-0">
            <div class="col">
                <div class="h5 bg-secondary text-capitalize m-0 p-3">{{ symbol }}</div>
            </div>
            <div class="col">
                <div class="bg-primary font-monospace p-3">{{ formatCurrency(price) }}</div>
            </div>
        </div>
    </div>
</template>