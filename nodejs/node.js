var express = require('express');
var path = require('path');

//initiatiate express server /application
var app = express();

//define a route


app.get('/api/resources/pages/home', function(request, response){
    //application logic
    response.sendFile( path.join(_dirname, "index.html") );
});


//registration
//login
//select course

app.listen(1900);
