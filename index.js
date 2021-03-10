const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.listen(process.env.PORT || 80);

server.on('request', (req, res) => {
  res.end('NICE!');
});
