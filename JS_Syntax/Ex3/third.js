"use strict"

let a = prompt('Enter a');

let b = prompt('Enter b');

let c = prompt('Enter c');

function isGreater(x,y,z){
    let max_val = 0;
    if (x > y){
        max_val = x;
    }else{
        max_val = y;
    }
    if (z > max_val){
        max_val = z;
    }
    return max_val;
}

function isSmaller(x,y,z){
    let min_val = 0;
    if (x < y){
        min_val = x;
    }else{
        min_val = y;
    }
    if (z < min_val){
        min_val = z;
    }
    return min_val;
}


alert('The greater number is: ' + isGreater(a,b,c));

alert('The smaller number is: ' + isSmaller(a,b,c));


