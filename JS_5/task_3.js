// Create the function that swap two array elements by index.

// Создайте функцию, которая меняет местами два элемента массива по индексу.

'use strict'

function swapIndex(arr) {
    let a = arr[0];
    let b = arr[1];

    arr[1] = a;
    arr[0] = b;
    return arr;
}   

let arr1 = [5, 4];

console.log(swapIndex(arr1));