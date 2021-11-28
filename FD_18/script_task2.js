'use strict'

let str = String(prompt());

if (str.length <= 20) {
    console.log(str.slice(0, 20));
} else {
    console.log(str.slice(0, 20) + ' …');
}









