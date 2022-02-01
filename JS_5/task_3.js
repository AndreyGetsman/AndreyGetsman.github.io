// Create the function that swap two array elements by index.

// Создайте функцию, которая меняет местами два элемента массива по индексу.

'use strict'

function swapIndex(arr, index1, index2) {
    

    let a = arr[index1];
    let b = arr[index2];

    arr[index2] = a;
    arr[index1] = b;
    return arr;
}   

let arr1 = [5, 4, 2, 1, 6, 9];

console.log(swapIndex(arr1, 3, 5));