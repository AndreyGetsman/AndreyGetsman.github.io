'use strict'
let n = +prompt();
let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
	let c = a + b;
	
	a = b;
	b = c;
	
	console.log(c);
}