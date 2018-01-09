var fs = require('fs');
function asyncProg() {
    var file = fs.readFile(process.argv[2], function read(err, content){
        var buf = content;
        var bufStr = buf.toString();
        var linesArr = bufStr.split('\n');
        var totLines = linesArr.length - 1;
        console.log(totLines); 
    })
};
asyncProg();