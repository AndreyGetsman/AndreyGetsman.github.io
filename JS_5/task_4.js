// Create the function that will generate array with random numbers. 
// Function should get length for generate array.

// Создайте функцию, которая будет генерировать массив со случайными числами. 
// Функция должна получить длину для генерации массива.

'use strict'

let arr1 = [];

function arrRandom(arr) {
    
    for(let i = 0; i < 8; i++) {
        let item = (Math.round(Math.random() * 10));
        arr1.push(item);
    }
    return arr1;
}   

console.log(arrRandom(arr1));