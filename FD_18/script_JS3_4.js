'use strict'

let str = prompt();
console.log(str);
let previousword = '';
let counter = 0;

for (let i = 0; i < str.length; i++) {
    let words = str[i];

    if (words === ' ' && previousword !== ' ') {
        counter++;
    }

    previousword = words;
}

console.log(counter + 1);


