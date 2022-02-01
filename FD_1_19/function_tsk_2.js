// Write a function that returns the last digit of given integer 
// as an English word. 
// Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"

// Напишите функцию, которая возвращает последнюю цифру заданного целого 
// числа в виде английского слова. 
// Примеры: 512 -> "два", 1024 -> "четыре", 12309 -> "девять"

'use strict'

let num1 = +prompt(); 
 
function lastNum (number) { 
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let last = number % 10; 
    let result = arr[last];
    return result;
}

console.log('last number:' + lastNum(num1));


//     let result; //string
//     switch(last) { // 
//         case 1 : 
//         	result = 'one';
//         break; 
//         case 2 : 
//         	result = 'two'; 
//         break; 
//         case 3 : 
//         	result = 'three'; 
//         break; 
//         case 4 : 
//         	result = 'four'; 
//         break; 
//         case 5 : 
//         	result = 'five'; 
//         break; 
//         case 6 : 
//         	result = 'six'; 
//         break; 
//         case 7 : 
//         	result = 'seven'; 
//         break; 
//         case 8 : 
//         	result = 'eight'; 
//         break; 
//         case 9 : 
//         	result = 'nine'; 
//         break; 
//     } 
//     return result;
// } 


// console.log(lastNum(num1) + 'last number');



