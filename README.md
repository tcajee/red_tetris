# Red Tetris

## Core Project structure:

```bash
src
├── client
│   ├── pages
│   │   └── index.js
└── server
    ├── routes
    │   └── index.js
    └── server.js
```

### Starting the Server:

This folder contains the express with socket.io server.

To launch the server, run the commands below from the root of the 'server' folder: 

```
> npm install
> npm run server
```

### Building the Client:

This folder contains the Red-Tetris Next.js application.

For more info on Next.js, see: https://vercel.com/blog/next

To build the application, run the commands below from the root of the 'client' folder: 

```
> npm install
> npm run build
> npm run start
```

### Launching the game

To start the application, navigate to http://localhost:3000.

### Running tests

To execute the unit tests, run the commands below from the root of the 'client' folder: 

```
> npm run test
```


