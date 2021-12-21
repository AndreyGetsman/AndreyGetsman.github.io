'use strict'

let str = prompt();
console.log(str);
let previousword = '';
let counter = 0;
let arr = [];

for (let i = 0; i < str.length; i++) {
    let words = str[i];
    arr.push(words);

    if (words === ' ' && previousword !== ' ') {
        counter++;
    }

    previousword = words;
}

console.log(counter + 1);



