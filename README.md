<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/codeql-analysis.yml)
[![Deploy to Heroku](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/vite-crypto-ticker-app/actions/workflows/heroku.yml)

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

[View Demo](https://webceyhan-vite-crypto-ticker.herokuapp.com/) |
[Report Issue](https://github.com/webceyhan/vite-crypto-ticker-app/issues) |
[Request Feature](https://github.com/webceyhan/vite-crypto-ticker-app/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

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

## Deployment (Heroku)

A GitHub Action will automatically deploy the project to Heroku on every push.

> See the details in [.github/workflows/heroku.yml](./.github/workflows/heroku.yml)

1. Create an [Heroku](https://www.heroku.com/home) account.

2. Install the `heroku-cli` as shown in the [guide](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

3. Create a new Heroku app inside the project folder to bind it.

    ```sh
    heroku create
    ```

    > This will create a new application on Heroku server and bind it to your project by adding a remote `heroku` upstream to your git repository.

4. Set the following secrets on your Github repository:
    ```sh
    HEROKU_API_KEY
    HEROKU_APP_NAME
    HEROKU_EMAIL
    ```

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [Express](https://expressjs.com/)
-   [Server-Sent-Events (SSE)](https://en.wikipedia.org/wiki/Server-sent_events)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Heroku](https://www.heroku.com)
    -   [heroku-deploy](https://github.com/akhileshns/heroku-deploy@)
-   [CoinCap API](https://www.coincap.io/)
    -   [WebSocket (WS)](https://github.com/websockets/ws)
