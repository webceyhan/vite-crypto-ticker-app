import { ref } from 'vue';
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
    socket.onmessage = ({ data }) =>
        (state.value = {
            ...state.value,
            ...JSON.parse(data),
        });

    return { state };
};
