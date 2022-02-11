import express from 'express';
import cors from 'cors';
import { SSE_HEADERS, WWW_DIR } from './constants.js';
import { createSocket } from './socket.js';

export const createHttpServer = (port, hostname) => {
    // create app
    const app = express();

    // enable cors
    app.use(cors());

    // serve static client files
    app.use(express.static(WWW_DIR));

    // define sse route
    app.get('/sse', (req, res) => {
        // set and flush SSE headers
        res.header(SSE_HEADERS);
        res.flushHeaders();

        createSocket().on('message', (state) => {
            res.write(`data: ${JSON.stringify(state)}\n\n`);
        });
    });

    // define catch-all route for app
    app.get('*', (req, res) => res.sendFile(`${WWW_DIR}/index.html`));

    // start listening
    app.listen(port, hostname, () =>
        console.log(`server started: http://${hostname}:${port}`)
    );

    return app;
};
