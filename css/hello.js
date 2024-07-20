http = require('node:http')

listener = function(request, response){
    response.writeHead(200,{'Content-type' : 'text/html'});
    response.end('<h1>Hello World</h1>');
}

server = http.createMethod(listener);

server.listen(14000);

console.log('Server si running on port 1400')