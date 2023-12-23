import { computed, ref } from 'vue';

// define environment vars
const IS_DEV = import.meta.env.DEV;
const HOST_DEV = `http://${location.hostname}:3001`;
const HOST_PROD = location.origin;
const API_URL = `${IS_DEV ? HOST_DEV : HOST_PROD}/sse`;

export const createApi = () => {
    // define state
    const state = ref({});

    // define event source
    const es = new EventSource(API_URL);

    // define message listener
    es.onmessage = ({ data }) => {
        state.value = JSON.parse(data);
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
