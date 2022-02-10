<script setup>

import { formatCurrency, getDiffColor } from '../utils';

defineProps({
    symbol: String,
    price: String,
    diff: Number,
})

</script>

<template>
    <div class="card text-light bg-secondary bg-opacity-25 border-secondary">
        <div class="row g-0">
            <div class="col">
                <div class="h6 text-capitalize m-0 p-3">{{ symbol }}</div>
            </div>
            <div class="col text-dark">
                <div
                    class="font-monospace p-3"
                    :class="getDiffColor(diff)"
                >{{ formatCurrency(price) }}</div>
            </div>
        </div>
    </div>
</template>