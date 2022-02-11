import { WebSocket } from 'ws';
import { makeUrl } from './utils.js';

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

export const createSocket = () => {
    // define internal state
    const state = {};

    // define message listener
    const listeners = {};

    // create socket
    const socket = new WebSocket(url);

    // define message listener
    socket.onmessage = ({ data }) => {
        Object.entries(JSON.parse(data)).forEach(([symbol, price]) => {
            const oldPrice = state[symbol]?.price;
            const diff = price > oldPrice ? 1 : price < oldPrice ? -1 : 0;
            state[symbol] = { price, diff };
        });

        listeners['message'] && listeners['message'](state);
    };

    return {
        on: (event, listener) => (listeners[event] = listener),
    };
};
