
# zuschuss-backend
Backend application for the zuschuss-application 

## Description

This is the Backend Application of the Zuschuss Application. It's main responsibility to process date via REST endpoints and store it in the database. The application uses [NestJS](https://github.com/nestjs/nest) as framework.

## Prerequisite

* [Node.js](https://nodejs.org/en/)
* [nvm](https://github.com/nvm-sh/nvm)

To use the defined version of Node.js (see `.nvmrc`) please run `nvm use` before running any other `nvm` command. You might need to install the defined version by running `nvm install v16.16.0` or whatever the current defined version is.

```bash
# switch to defined node version
nvm use

# maybe install the needed node version first
nvm install 14.16.1
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
