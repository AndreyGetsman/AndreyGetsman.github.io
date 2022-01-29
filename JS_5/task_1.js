// Create a function that will find max number in array.  
// Use function several times with different arrays.

// Создайте функцию, которая найдет максимальное число в массиве. 
// Используйте функцию несколько раз с разными массивами.

'use strict'

function maxNumber(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [2, 5, 4, 8, 7, 9];
let arr1 = [6, 3, 4, 8, 2, 1];

console.log(maxNumber(arr));
console.log(maxNumber(arr1));