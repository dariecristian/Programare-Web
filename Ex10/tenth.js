"use strict"

const dividers = (number) => {

    let dividers = '';
        for(let i = 0; i <= number; ++i){
            if(number % i == 0){
                dividers = dividers +i + ' ';
            }
        }
        alert(dividers);
    }

dividers(prompt('Write a number'))