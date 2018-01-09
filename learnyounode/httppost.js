var http = require('http');
var server = http.createServer(function (request, response){
    var map = require('through2-map')  
    request.pipe(map(function (response) {  
      return response.toString().split('').toUpperCase().join('')  
    })).pipe(response)
});
server.listen(process.argv[2]);