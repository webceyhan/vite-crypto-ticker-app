import  { createHttpServer } from './http.js'
// import  { createSocketServer } from './socket.js'

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// start servers on same port
const server = createHttpServer(PORT, HOSTNAME);
// const wss = createSocketServer(server);