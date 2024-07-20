var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hooray I have just run my first server</h1>')
}).listen(3500);

console.log('Server is runnung');