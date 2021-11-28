'use stcrict'

let str = String(prompt());
console.log(str);
let counter = 0;
let previousChar = '';

for (let i = 0; i < str.length; i++) {
    let char = str[i];  

    if (char === ' ' && previousChar !== ' ') {
        counter++;
    } 

    previousChar = char;
} 
    console.log('number of words:', counter + 1);
