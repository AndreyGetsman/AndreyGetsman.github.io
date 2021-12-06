'use strict'

let browser = prompt();

switch(browser) {
    case 'Edge' :
    case 'IE' :
    case 'Opera' : {
        console.log('partial support');
        break;
    }
    case 'Chrome' :
    case 'Mozila' :
    case 'Safari' : {
        console.log('support');
        break;
    }
    default : {
        console.log('not support');
    }
}