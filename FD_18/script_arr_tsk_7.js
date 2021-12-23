'use strict'

let arr = []; 
let maxIndex = 0;
let minIndex = 0;
let sum = 0;
 
for (let i = 0; i < 10; i++) {
    let item = (Math.round(Math.random() * 100)); 
    arr.push(item);
}
console.log(arr);
let max = arr[0];
let min = arr[0];
 
for (let y = 0; y < arr.length; y++) {
    if (arr[y] > max) {
        max = arr[y];
        maxIndex = y;
    }
}

for (let y = 0; y < arr.length; y++) {
    if (arr[y] < min) {
        min = arr[y];
        minIndex = y;
    }
}

for (let i = minIndex; i <= maxIndex; i++) {
    sum += arr[i];
}

console.log(min);
console.log(max);
console.log(sum);






