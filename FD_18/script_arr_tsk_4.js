'use strict'

let arr = [78,55,11,11,55,78];
let flag = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
        console.log('not mirror');
        flag = false;
        break;
    }
}

if (flag) {
    console.log('mirror');
}



