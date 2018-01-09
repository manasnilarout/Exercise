var mod1 = require('./module1.js');

function logit(arr){
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

mod1(process.argv[2], process.argv[3], logit);




