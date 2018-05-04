const http = require('http');

const handle = require('./server/handle');

const server = http.createServer(handle); 

server.listen(3000, () => [
  console.log('Server is listening on Port 3000.')
]);