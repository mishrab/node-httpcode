var http = require('http');
http.createServer(function (request, response) {
    if ( request.method === 'POST' ) {
        var buffer = ''; // todo: change code to handle different encodings, etc
        request.on('data', function (chunk) {
            buffer += chunk;
        });
        request.on('end', function () {
            console.log('Info from the POST request: \n', buffer);
            response.statusCode = 200;
            response.end('Got data: ' + buffer);
        });
    } else {
        response.statusCode = 400;
        response.end('Unsupported method: ' + request.method);
    }
}).listen(5000, function () {
    /**
     * test code on bash using $curl -POST "http://localhost:5000" --data "name=jacob&age=30"
     */
    console.log('listening on port: ', 5000);
});