var http = require("http"); 

var server = http.createServer (function (req , res ) { res.writeHead(200, {'Content-Type': 'text/plain'}); ;res.write('hello word\n'); res.end('aaaaa')});
server.listen (8081);
console.log ('Server running at http://127.0.0.1:8081/');// create a server that responds with HELLO WORLD on port 8081

