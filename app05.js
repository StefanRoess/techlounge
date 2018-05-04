'use strict'

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const person = {
    firstname: 'Stefan',
    lastname: 'Roess'
  };

  //res.status(404).send(person); moechte man einen anderen Code zurücksenden
  //res.status(404).end();   moechte man einen anderen Code zurücksenden
  res.send(person);
})

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Server is listening on Port 3000.')
})