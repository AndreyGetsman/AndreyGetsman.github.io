'use stcrict'

let str = String(prompt());
console.log(str);
let counter = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];  

    if ((char.toUpperCase()) === char) {
        counter++;
    } 

} 
    console.log('number of uppercase chars:', counter);
    console.log('number of lowercase chars:', str.length - counter);
