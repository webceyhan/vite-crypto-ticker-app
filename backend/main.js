import { HOSTNAME, PORT } from './constants.js';
import { createHttpServer } from './http.js';

// start server
createHttpServer(PORT, HOSTNAME);
