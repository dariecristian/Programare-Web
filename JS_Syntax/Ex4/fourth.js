"use strict"

let str = prompt('Enter your name: ');

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(str));