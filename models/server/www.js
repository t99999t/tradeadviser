#!/usr/bin/env node
/*
 * Copyright (c) TradeAdviser Inc. All rights reserved.
 * Licensed under the APACHE 2.0 License.
 */
// @flow
/**
 * Module dependencies.
 */
const flow = require('flow-bin');
const http = require('http');
require('dotenv').config({path: "environment.env"});
const express = require('express');
const app = express();
const execFile = require('child_process').execFile;
const path = require('path');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const corsOptions = require("../../config/corsOptions");
const credentials = require("../../config/credential");
let indexRouter = require('../../routes/api');
const bodyParser = require("body-parser");
const {logger} = require("../../middleware/logEvents");
const errorHandler = require("../../middleware/errorHandler");
const createError = require("http-errors");


/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(4000 || process.env.PORT );

const debug = require('debug')('tradeadviser :./server/www.js');


execFile(flow, ['check'], (err, stdout) => {
  if (err) {
    throw err;
  }
      console.log(stdout);});

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}))
app.use(cookieParser());
// custom middleware logger
app.use(logger);
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.set('views', path.join(__dirname, 'public'));
app.engine('views engine', express.static('html'));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/',indexRouter);




app.get('/ping',  ( res)=> {
  return res.status(200).json({
    message: 'pong'
  });
});

//catch 404 and forward to error handler
app.use('*',
     ( res)=> {
      res.status(404).json({
            message: 'Not Found'
          }
      )
      res.end();
    })
//Check server status and forward it
app.get('/ws', ( res)=> {
  return res.sendStatus(200)
})

// function to get the data from the API
app.get('/api',(req, res)=> {
  return res.status(200).json(req.query);
});


app.use((req, res) => {  return createError(res.status + 'Couldn\'t find ' + req.url + ' only    ')})
app.use(errorHandler);



/**
 * Create HTTP server.
 */

let  server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
