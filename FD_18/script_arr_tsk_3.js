'use strict'

let arr = [];
let arr1 = [];

for (let i = 0; i < 5; i++) {
    arr[i] = +prompt('введите число');  
}

let a = +prompt('');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== a) {
        arr1.push(arr[i]);
    }
}
console.log(arr1); 

