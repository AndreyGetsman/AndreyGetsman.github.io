'use strict'

let str = prompt();

if (str.length <= 20) {
    console.log(str);
} else {
    console.log(str.slice(0, 20) + ' …');
}









