var http = require('http');
const readline = require('readline')

function escreve(){
//todo
//return 

};

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    x = "hello world \n";
    response.end(x);
}).listen(8080);

console.log('Server started');