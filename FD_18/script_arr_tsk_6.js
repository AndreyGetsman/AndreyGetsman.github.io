'use strict'

let arr = []; 
 
for (let i = 0; i < 10; i++) {
    let item = (Math.round(Math.random() * 100) - 100); 
    arr.push(item);
}
console.log(arr);
let max = arr[0];
 
for (let y = 0; y < arr.length; y++) {
    if (arr[y] % 2 === 0 && arr[y] > max) {
        max = arr[y];
    }
}
 
console.log(max);






