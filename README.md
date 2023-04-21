# Framework Comparison

This is a monorepo with the purpose of comparing different JavaScript frameworks using the Spotify API. The base route will fetch all playlists for the logged in user and will allow to navigate to the playlist details page.

## Contents

- [Framework Comparison](#framework-comparison)
  - [Contents](#contents)
  - [Tech](#tech)
  - [Architecture](#architecture)
    - [Apps](#apps)
    - [Packages](#packages)
  - [Acknowledgements](#acknowledgements)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Commands](#commands)

## Tech

- [Turborepo](https://turbo.build/repo) - monorepo management
- [ExpressJS](https://expressjs.com/) - simple API server
- [Yarn](https://yarnpkg.com/) - Package management
- [Mitosis](https://github.com/builderio/mitosis) - UI component generator

## Architecture

The repo is broken up into two parts: `apps/*` & `packages/*`.

### Apps

The `apps/*` are the implementations of the frameworks and the supporting Spotify API proxy. The proxy is used simplify the interaction with the Spotify API as each app can point to the same endpoints and not worry about auth.

| App                                                 | Framework                                         |
| --------------------------------------------------- | ------------------------------------------------- |
| [`apps/create-react-app`](./apps/create-react-app/) | [Create React App](https://create-react-app.dev/) |
| [`apps/nextjs-app`](./apps/nextjs-app/)             | [Next.js](https://nextjs.org/)                    |
| [`apps/nuxt-app`](./apps/nuxt-app/)                 | [Nuxt.js](https://nuxtjs.org/)                    |
| [`apps/qwik-app`](./apps/qwik-app/)                 | [Qwik](https://qwik.builder.io/)                  |
| [`apps/spotify-api`](./apps/spotify-api/)           | [Spotify API](https://developer.spotify.com/)     |
| [`apps/svelte-kit-app`](./apps/svelte-kit-app/)     | [Svelte Kit](https://kit.svelte.dev/)             |

### Packages

The `packages/*` are the shared components/utils used across the apps.

| Package                                                                         | Description                                           |
| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`packages/framework-compare-api`](./packages/framework-compare-api/)           | Shared API types and methods.                         |
| [`packages/framework-compare-configs`](./packages/framework-compare-configs/)   | Shared TailwindCSS configs.                           |
| [`packages/framework-compare-eslint`](./packages/framework-compare-eslint/)     | Shared eslint configurations.                         |
| [`packages/framework-compare-mitosis`](./packages/framework-compare-mitosis/)   | Generates all UI components for each framework syntax |
| [`packages/framework-compare-tsconfig`](./packages/framework-compare-tsconfig/) | Shared TS config.                                     |
| [`packages/framework-compare-types`](./packages/framework-compare-types/)       | Shared Types used within all of the apps.             |
| [`packages/framework-compare-utils`](./packages/framework-compare-utils/)       | Shared utils used within all of the apps.             |

## Acknowledgements

- All icons are from [Remix Icons](https://remixicon.com/)

## Development

### Prerequisites

- [Node v18+](https://nodejs.org/en/)
- [Yarn v1.22+](https://yarnpkg.com/)
- [Spotify Developer Account](https://developer.spotify.com/dashboard/login)

### Setup

1. Run `yarn` to install all dependencies.
1. Copy the `.env.base` file to `.env`.
1. Add your Spotify Client ID and Client Secret to the `.env` file.
1. Run `yarn dev` to start the dev server for all applications.
1. Create React App will open automatically in your browser and try to authenticate with Spotify.
  - All other applications will assume that you are authenticated and will throw errors if a token is not found.

### Commands

| Command        | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| `yarn dev`     | Starts the dev server for all applications.                           |
| `yarn build`   | Builds all applications.                                              |
| `yarn preview` | Builds all applications for production and starts them. applications. |
| `yarn lint`    | Runs eslint on all applications.                                      |
| `yarn format`  | Runs prettier on all applications.                                    |
