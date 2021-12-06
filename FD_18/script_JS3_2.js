'use strict'

let a = (Math.round(Math.random() * 100));
  
for (let i = 0; i < 10; i++) {
    let n = +prompt();
    console.log(n);
    if (n < a) {
        console.log('введите большее число: ');
    } else if (n > a) {
        console.log('введите меньшее число: ');
    } else if ( a === n) {
        console.log('Вы угадали');
        break;
    } 
    if (i === 9) {
        console.log('Вы не угадали, Введенное число: ', a);
    }
}
