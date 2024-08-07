// Create web server
// Create a web server that's going to send back some data
// when someone visits the website at the root URL.

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end('{"comments": "This is a comment."}');
});

// Listen on port 8000, IP defaults to