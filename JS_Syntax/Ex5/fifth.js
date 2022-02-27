"use strict"

let str = prompt('Enter a value with a currency symbol first:');

function extractCurrencyValue(str){
    alert(str.slice(1));
    return +(str.slice(1));
}

extractCurrencyValue(str);

alert( extractCurrencyValue('$120') === 120);