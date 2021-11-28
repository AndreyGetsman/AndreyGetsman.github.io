'use stcrict'

let str = String(prompt());

for (let i = 0; i < str.length; i++) {
    let char = str[i];
   
    if (char.toUpperCase() === char) {
        console.log('UpperCase');
    } 
    
    if (char.toLowerCase() === char) {
        console.log('LowerCase');
    }

} 

