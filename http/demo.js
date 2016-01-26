/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var http = require('http');

var server = http.createServer(function(request, response){
    console.log("method: " + request.method + ", url: " + request.url);
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello NodeJs !</h1>');
});

// ·şÎñÆ÷¼àÌı8080¶Ë¿Ú
server.listen(8080);

console.log('Server is run on http://127.0.0.1:8080/');
