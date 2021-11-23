'use strict'

let a = prompt();

if ( a === 'Edge' || a === 'IE' || a === 'Opera') {
    alert('partial support;')
} else if ( a === 'Chrome' || a === 'Mozila' || a === 'Safari') {
    alert('support;')
} else {
    alert('not support')
}