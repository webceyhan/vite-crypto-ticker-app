import { WebSocket } from 'ws';
import { COINCAP_URL } from './constants.js';

export const createSocket = () => {
    // define internal state
    const state = {};

    // create socket
    const socket = new WebSocket(COINCAP_URL);

    // define message listener
    socket.onmessage = ({ data }) => {
        Object.entries(JSON.parse(data)).forEach(([symbol, price]) => {
            const oldPrice = state[symbol]?.price;
            const diff = price > oldPrice ? 1 : price < oldPrice ? -1 : 0;
            state[symbol] = { price, diff };
        });
    };

    return { state };
};
