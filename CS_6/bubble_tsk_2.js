'use strict'

let arr = [1, 4, 3, 2, 5, 8, 7, 6, 4, 4, 9];
let swap;
console.log(arr);   

for (let i = 0; i < arr.length; i+=2) {
    for (let k = 0; k < arr.length; k+=2) {
        if (arr[k] > arr[k + 2]) {
            swap = arr[k];
            arr[k] = arr[k + 2];
            arr[k + 2] = swap;
        }
    }
}

console.log(arr);


    


