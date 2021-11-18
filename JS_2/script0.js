'use strict'

let num = +prompt();

if (num >= 10 && num <= 100 && num % 2 === 0) {
  console.log(num + ' is correct');
} else {
  console.log('Incorrect number');
}



