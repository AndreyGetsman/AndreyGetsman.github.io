let arr = []; 
let max = 0;
 
for (let i = 0; i < 10; i++) {
    let item = (Math.round(Math.random() * 100)); 
    arr.push(item);
}

console.log(arr);
 
for (let y = 0; y < arr.length; y++) {
    if (arr[y] > max) {
        max = arr[y];
    }
}

console.log(max);







