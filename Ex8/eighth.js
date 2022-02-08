"use strict"

let user = ('username');
let pass = ('password'); 

let login = prompt('enter the username(same)');
let word = prompt('enter the password(same)');

if (login == user && word == pass){
alert("Привет");
}else if (login != user && word == pass){
alert ('Неправильный username')
}else if (login == user && word != pass){
alert('Неправильный password')
}else if (login != user && word != pass){
alert('Ошибка Валидации')
}