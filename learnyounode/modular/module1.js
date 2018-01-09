var fs = require('fs');
var path = require('path');

module.exports = function extCount(dir, extn, callback) {
    var ext = '.' + extn;
    var arr = [];
    fs.readdir(dir, function exten(err, list) {
        if (err) {
            return callback(err);
        }
        for (i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === ext) {
                arr.push(list[i]);
            }
        }
        return arr;
    })
    callback(arr);
};




