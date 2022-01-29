'use strict'

let arr = [1, 4, 3, 2, 5, 8, 7, 6, 4, 4, 9];
let newArr = [];
let swap;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
    
    for (let k = 0; k < arr.length; k++) {
        if (newArr[k] > newArr[k + 1]) {
            swap = newArr[k];
            newArr[k] = newArr[k + 1];
            newArr[k + 1] = swap;
        }
    }
}

console.log(newArr);


    


