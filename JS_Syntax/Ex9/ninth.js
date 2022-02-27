'use strict'

let tag = prompt("What is your name?");
if (tag == null){
alert(`Don't be shy`);
}else{
alert(`Hi ${tag}`);
}

let knowledge = confirm("Do you know JavaScript?")
if (knowledge == true){
    alert("Very Good!");
}else{
    alert("You can start now!");
}



