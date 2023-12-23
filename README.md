<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/github-code-scanning/codeql)

<!-- LOGO (OPTIONAL) -->

<!-- <img src="./src/assets/logo.png" width="100px"> -->

 <!-- HEADER ///////////////////////////////////////////////////////////// -->

# Vite Crypto Ticker App with SSE

This is a basic crypto asset ticker application which demonstrates SSE (Server-Sent-Events) for unidirectional communication.

It consists of a backend server and a frontend application.

Backend server was implemented using ExpressJs to serve the compiled frontend app as static content.
A simple SSE (Server-Sent-Events) implementation was used to send realtime updates to the frontend.
Data is fetched from the CoinCap API using a single WebSocket connection.

Frontend application is built with Vite + Vue 3 + Bootstrap.
Client is automatically fetching the stream from the server using standart EventSource API.

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/vite-crypto-ticker-app.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd vite-crypto-ticker-app
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm start               # run application
npm run dev             # start watching backend & frontend concurrently
npm run dev:backend     # start nodemon to watch backend app
npm run dev:frontend    # start vite to watch frontend app
npm run build           # build for production
npm run preview         # preview built app
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

You have to run both backend server and frontend development server concurrently to be able to develop application properly.

```sh
npm run dev
```

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the frontend application for production.

```sh
npm run build
```

To preview, you still have to run the backend server which will serve the app and provide socket connectivity in order to make it work properly.

```sh
npm run preview
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (Render)

Project is linked to [Render](https://render.com/) for deployment.

>It will automatically deploy the project to Render on every push.

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [Express](https://expressjs.com/)
-   [Server-Sent-Events (SSE)](https://en.wikipedia.org/wiki/Server-sent_events)
-   [CoinCap API](https://www.coincap.io/)
    -   [WebSocket (WS)](https://github.com/websockets/ws)
