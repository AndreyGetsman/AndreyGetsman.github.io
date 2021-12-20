'use strict'

let a = (Math.round(Math.random() * 10));
  
for (let i = 0; i < 5; i++) {
    let n = +prompt();
    if ( a === n) {
        alert('true');
        break;
    } 
}
    console.log(a); 

