import express from 'express';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';
import http from 'http';
import { createWebhook } from './createWebhook';
import { clearWebhooks } from './clearWebhooks';
import { asana } from './api';
import { routes } from './routes';

// EXPRESS SET UP

// Start up express
const app = express();

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for parsing application/json
app.use(bodyParser.json());

// SET UP WEB SOCKETS

// Create http server with app
const server = http.createServer(app);

// pass server to sockiet.io for websockets
const io = socketIO(server);

// add io to Express request objects
app.use((req, res, next) => {
  req.io = io;
  next();
});

// START UP OUR SERVER

// Serve up some static files
app.use(express.static('public'));

// Use these routes
app.use('/', routes(express.Router()));

// Listen on this here port
server.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${server.address().port}. 🚢`);
});

// INTIALIZE WEBHOOkS

const intializeWebhooks = async () => {
  try {
    // 1. Remove all webhooks we might have previously created for this application
    await clearWebhooks(
      process.env.PERSONAL_ACCESS_TOKEN,
      `https://${process.env.PROJECT_DOMAIN}.glitch.me/events`,
      io
    );

    // 2. After clearWebhooks has resolved, POST a new webhook using the resource ID provided
    createWebhook(
      process.env.PERSONAL_ACCESS_TOKEN,
      process.env.RESOURCE_ID,    `https://${process.env.PROJECT_DOMAIN}.glitch.me/events`,
      io
    );
  } catch (e) {
    console.error(e.message)
  }
};

intializeWebhooks();
