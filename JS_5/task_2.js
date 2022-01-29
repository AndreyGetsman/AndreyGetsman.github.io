// Create the function that will reverse array.

// Создайте функцию, которая перевернет массив.

'use strict'

function arrReverse(arr) {
    
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[(arr.length - 1) - i];
    }
    return a;
}

let arr1 = [1, 2, 3, 4, 5, 6];

console.log(arrReverse(arr1));


