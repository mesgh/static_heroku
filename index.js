const http = require('http');
const server = http.createServer();
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const serve = serveStatic('static', { 'index': ['index.html', 'static.pdf', 'info.txt', 'obrazets.pdf', 'Telnet.mp4'] });

server.listen(process.env.PORT || 80);

server.on('request', (req, res) => {
  serve(req, res, finalhandler(req, res));
});
