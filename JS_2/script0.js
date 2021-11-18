'use strict'

let num = prompt();;

if (num >= 10 && num <= 100 && num % 2 == 0) {
  console.log(num + ' is correct');
}

if (num <= 9 || num >= 100 || num % 2 != 0) {
  console.log('Incorrect number');
}


