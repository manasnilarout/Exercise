var net = require('net');
var dt = new Date();
dt.getFullYear()  
dt.getMonth()       
dt.getDate()  
dt.getHours()  
dt.getMinutes() 

var server = net.createServer(function (socket){
    socket.end(dt);
});

server.listen(process.argv[2]);