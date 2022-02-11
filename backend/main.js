import { HOSTNAME, PORT } from './constants.js';
import { createHttpServer } from './http.js';

// start server
const server = createHttpServer(PORT, HOSTNAME);
