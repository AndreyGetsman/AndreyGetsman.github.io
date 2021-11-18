'use strict'

var num = 4563;
var mult = 1;
while(num > 0) {
  mult *= num % 10;
  num = Math.floor(num / 10);
}
console.log(mult);


