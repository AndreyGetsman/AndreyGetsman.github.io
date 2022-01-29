// Write a function that returns the last digit of given integer 
// as an English word. 
// Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"

// Напишите функцию, которая возвращает последнюю цифру заданного целого 
// числа в виде английского слова. 
// Примеры: 512 -> "два", 1024 -> "четыре", 12309 -> "девять"

'use strict'

let num1 = prompt();

function lastNum () {
    let num2 = num1 % 10;
    switch(num2) {
        case '1' : console.log('one');
        break;
        case '2' : console.log('two');
        break;
        case '3' : console.log('three');
        break;
        case '4' : console.log('four');
        break;
        case '5' : console.log('five');
        break;
        case '6' : console.log('six');
        break;
        case '7' : console.log('seven');
        break;
        case '8' : console.log('eight');
        break;
        case '9' : console.log('nine');
        break;
    }
    
    console.log(num2);
}

console.log(lastNum());
    


// let browser = prompt();

// switch(browser) {
//     case 'Edge' :
//     case 'IE' :
//     case 'Opera' : {
//         console.log('partial support');
//         break;
//     }
//     case 'Chrome' :
//     case 'Mozila' :
//     case 'Safari' : {
//         console.log('support');
//         break;
//     }
//     default : {
//         console.log('not support');
//     }
// }

// function maxNumber(arr) {
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [2, 5, 4, 8, 7, 9];
// let arr1 = [6, 3, 4, 8, 2, 1];

// console.log(maxNumber(arr));
// console.log(maxNumber(arr1));


