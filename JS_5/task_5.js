// Create the function for calc sum figures in the number. 
// Function params: number. Function should return sum of figures. 

// Создайте функцию для вычисления суммы цифр в числе. 
// Параметры функции: число. Функция должна возвращать сумму цифр.

'use strict'

let num1 = +prompt();
let sum = 0;


function sumNumber(num) {
    for(let i = 0; i < num1.length; i++) {
        sum = num1[i] + 1;
    }
    return sum;

}

console.log(sumNumber(sum));