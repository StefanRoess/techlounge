'use strict'

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hallo Welt!');
})

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Server is listening on Port 3000.')
})