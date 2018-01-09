var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var http = require('http')

http.get(url1, function collect(response1){
    response1.pipe(bl(err, data));
    console.log(data.toString());
    });

http.get(url2, function collect(response2){
     response2.pipe(bl(err, data));
     console.log(data.toString());
     });

http.get(url2, function collect(response2){
    response2.pipe(bl(err, data));
    console.log(data.toString());
    });