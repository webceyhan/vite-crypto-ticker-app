import { computed, ref } from 'vue';
import { makeUrl } from './utils';

// define assets to be fetched
const assets = [
    'bitcoin',
    'ethereum',
    'litecoin',
    'solana',
    'avax',
    'polkadot',
    'cardano',
    'stellar',
];

// create url with query params
const url = makeUrl('wss://ws.coincap.io/prices', { assets });

export const createApi = () => {
    // define state
    const state = ref({});

    // create socket
    const socket = new WebSocket(url);

    // define message listener
    socket.onmessage = ({ data }) => {
        Object.entries(JSON.parse(data)).forEach(([symbol, price]) => {
            const oldPrice = state.value[symbol]?.price;
            const diff = price > oldPrice ? 1 : price < oldPrice ? -1 : 0;
            state.value[symbol] = { price, diff };
        });
    };

    return {
        state,
        listByPrice: computed(() =>
            Object.entries(state.value)
                .map(([symbol, data]) => ({ symbol, ...data }))
                .sort((a, b) => b.price - a.price)
        ),
    };
};
