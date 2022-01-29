'use strict'

let arr = [4, 2, 7, 3, 1, 9, 8];
let swap;

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i; k++) {
        if (arr[k] > arr[k + 1]) {
            swap = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = swap;
        }
    }
}

console.log(arr);