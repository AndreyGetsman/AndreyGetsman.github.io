'use strict';

let a = 32;
let b = 8086;
let result = (a + b);
console.log(result);


let c = 10;
let d = -19;
let e = (c + d);
console.log(e);

let f = 789;
let g = 345;
let t = 123;
let q = (f-g-t);
console.log(q);

// let x = 6;
// let y = 15;
// let z = 4;
// x += y- x++ * z;
// z = -- x - y * 5 ;
// y/= x + 5 % z ;


// console.log(x);
// console.log(z);
// console.log(y);

let x = 6;
let y = 15;
let z = 4;
z = x++ + y* 5 ;
x = y - x++ * z ;

console.log(z);
console.log(x);


let r = 10;
let h = 3;
let V = 3.14 * r * h;
let S = 2 * 3.14 * r * (r + h);
console.log(V);
console.log(S);

console.log(typeof 1);
console.log(typeof 'qwert');
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});


alert('Hello');
alert('world');
alert('1234');
console.log('Hello');
console.log('world');
console.log('1234');

let admin = null;
let name = 'Джон';
admin = name;

alert(admin);
console.log(admin);