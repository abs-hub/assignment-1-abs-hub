// we will be requiring http
var http = require('http');
// create server function with request and response
var server = http.createServer(function(req, res) {
    res.writeHead(200); // for success 
    // write a custom message
    res.write("Hello World! Welcome to abs-hub!");
    // response end
    res.end();
});
// add a listener for 8080 port, we need to open the port 8080
// using: sudo ufw allow 8080
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");