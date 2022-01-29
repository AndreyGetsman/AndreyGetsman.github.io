// Create program that will find max number in array. 
// Result should be displayed in the page.    

// Создайте программу, которая найдет максимальное число в массиве. 
// Результат должен быть отображен на странице.

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


// let arr = [3, 9, 5, 8, 4];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);

