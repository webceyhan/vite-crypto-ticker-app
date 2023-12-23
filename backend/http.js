import express from 'express';
import cors from 'cors';
import { SSE_HEADERS, WWW_DIR } from './constants.js';
import { createSocket } from './socket.js';

export const createHttpServer = (port) => {
    // create app
    const app = express();

    // create socket to CoinCap
    const socket = createSocket();

    // enable cors
    app.use(cors());

    // serve static client files
    app.use(express.static(WWW_DIR));

    // define sse route
    app.get('/sse', (req, res) => {
        // set and flush SSE headers
        res.header(SSE_HEADERS);
        res.flushHeaders();

        // define exit handler
        let stop = false;

        const loop = setInterval(() => {
            if (stop) clearInterval(loop);
            else res.write(`data: ${JSON.stringify(socket.state)}\n\n`);
        }, 1000);

        req.on('close', () => {
            res.end();
            stop = true;
        });
    });

    // define catch-all route for app
    app.get('*', (req, res) => res.sendFile(`${WWW_DIR}/index.html`));

    // start listening
    const server = app.listen(port, () =>
        console.log(`server started on port: ${port}`)
    );

    server.keepAliveTimeout = 120 * 1000;
    server.headersTimeout = 120 * 1000;

    return app;
};
