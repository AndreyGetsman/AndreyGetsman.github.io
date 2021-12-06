'use strict'

let str = prompt();
console.log(str);
let counter = 0;

for (let i = 0; i < str.length; i++) { 

    if (str[i].toUpperCase() === str[i]) {
        counter++;
    } 

} 
    console.log('number of uppercase chars:', counter);
    console.log('number of lowercase chars:', str.length - counter);
