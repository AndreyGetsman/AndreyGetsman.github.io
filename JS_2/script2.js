'use strict'

let a = +prompt();
let b = +prompt();

if (a > b) {
    let c = a;
    a = b;
    b = c;
}

for (let i = a; i < b; i++) {
    console.log(i);
}
