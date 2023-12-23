import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { makeUrl } from './utils.js';

// internal constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// environment constants
export const ROOT_DIR = dirname(__dirname);
export const WWW_DIR = join(ROOT_DIR, 'dist');

// network constants
export const PORT = process.env.PORT || 3001;
export const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// SSE constants
export const SSE_HEADERS = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
};

// API constants
export const COIINCAP_ASSETS = [
    'bitcoin',
    'ethereum',
    'litecoin',
    'solana',
    'avax',
    'polkadot',
    'cardano',
    'stellar',
];

export const COINCAP_URL = makeUrl('wss://ws.coincap.io/prices', {
    assets: COIINCAP_ASSETS,
});
