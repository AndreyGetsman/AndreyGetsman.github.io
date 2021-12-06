'use strict'

let num = prompt();
let max = Number(num[0]);

for (let i = 0; i < num.length; i++) {
  if (Number(num[i]) > max) {
    max = Number(num[i]);
  }
}
console.log(max);

