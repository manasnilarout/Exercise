var url = process.argv[2];
var http = require('http');
var bl = require('bl');

http.get(url, function collect(response){
    response.pipe(bl(err, data));
    console.log(data.toString());
    console.log(data.length());
    });