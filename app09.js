'use strict'

const http = require('http');

const express = require('express');

const app = express();

// optionaler Tag, durch ? erkennbar, geht nur mit String für den res.
// es geht nicht mit number
app.get('/blog/:year/:month/:day?', (req, res) => {
  console.log(`${req.method} ${req.path}`)

  if (req.query.format === 'html'){
    // early return soll abbrechen nach dem res.send. Ansonsten Fehler beim nachfolgenden res.send
    return res.send(`<h1>${req.params.day}.${req.params.month}.${req.params.year}</h1>`)
    // das folgende wirft einen Fehler in der node Console, da kein return vorhanden ist
    // res.send(`<h1>${req.params.day}.${req.params.month}.${req.params.year}</h1>`)
  }

  // as Strings
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01' // fallback value 01, bei weglassen des Tages.
  });

  // as number
  // res.send({
  //   year: req.params.year - 0,
  //   month: req.params.month  - 0,
  //   day: req.params.day - 0
  // });

  // btw
  // 23 + '' = '23' => string
  // '23' - 0 = 23 => number
});

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Server is listening on Port 3000.')
})