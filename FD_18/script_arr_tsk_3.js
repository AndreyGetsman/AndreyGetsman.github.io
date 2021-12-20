'use strict'

let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = prompt('введите число', +i);  
}

delete arr[prompt()];

console.log(arr); 


