import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';
import cors from 'cors';
import { createSocket } from './socket.js';

// define constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wwwDir = join(__dirname, '../dist');

export const createHttpServer = (port, hostname) => {
    // create app
    const app = express();

    app.use(cors());

    // serve static client files
    app.use(express.static(wwwDir));

    // define sse route
    app.get('/sse', (req, res) => {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // send the headers to client first
        res.flushHeaders();

        createSocket().on('message', (state) => {
            res.write(`data: ${JSON.stringify(state)}\n\n`);
        });
    });

    // define catch-all route for app
    app.get('*', (req, res) => res.sendFile(`${wwwDir}/index.html`));

    // start listening
    app.listen(port, hostname, () =>
        console.log(`server started: http://${hostname}:${port}`)
    );

    return app;
};
