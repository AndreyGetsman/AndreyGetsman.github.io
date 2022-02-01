// Write a function that reverses the digits of given decimal number.
//  Example: 256 -> 652

// Напишите функцию, которая меняет местами цифры заданного десятичного числа.
//  Пример: 256 -> 652

'use strict'



let num = +prompt();

function numReverse(num) {
    num = String(num);
    let result = num.split('').reverse().join('');
    return result;
}

console.log(numReverse(num));



// let num = +prompt();

// function numReverse(num) {
//     let reverse = 0;
//     while(num) {
//         reverse = reverse * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reverse;
// }

// console.log(numReverse(num));
