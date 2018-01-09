var fs = require('fs');
var path = require('path');
function extCount() {
    var ext = '.' + process.argv[3];
    var file = fs.readdir(process.argv[2], function exten(err, list){
        for(i=0; i<list.length; i++){
            if(path.extname(list[i]) === ext){
                console.log(list[i]);
            }
        }
    })
};
extCount();