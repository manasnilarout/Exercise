var http = require('http');
var url = require('url');
http.get('/api/parsetime', function (request, response) {
    url.parse(request.url, true);
    var dt = new Date().toISOString();
    var obj = {
        "hour": dt.getHours(),
        "minute": dt.getMinutes(),
        "second": dt.getSeconds()
    };
});
http.get('/api/unixtime', function (request, response) {
    url.parse(request.url, true);
    var dtu = new Date().toISOString();
    var obj = {
        "unixtime": dtu.getTime()
    }
})

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(obj);
});
server.listen(process.argv[2]);