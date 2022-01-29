'use strict'

let arr = ['apple', 'Orange', 'Banana', 'Kiwi', 'persimmon', 'tangerine'];
let swap;

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i; k++) {
        if (arr[k].toUpperCase() > arr[k + 1]) {
            swap = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = swap;
        }
    }
}

console.log(arr);

    


