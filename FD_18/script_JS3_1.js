'use strict'

let counter = 0;

for (let i = 0; i < 100; i++) {
    let random = Math.round(Math.random()*1000);
    console.log(random);

    if (random % 2 === 0) {
        counter++;
    }
}

console.log('4etnoe', counter);
console.log('ne4etnoe', 100 - counter);







