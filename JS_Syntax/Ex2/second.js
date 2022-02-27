"use strict"

let a = prompt('Enter the first number:');

let b = prompt('Enter the last number:');

let sum = 0;

let arr=[];

let range = {
  from : a,
  to: b,

  [Symbol.iterator](){
    this.current = this.from;
    return this;
  },

  next(){
    if(this.current <= this.to){
      return{done:false, value: this.current++};
    }else{
      return{done:true};
    }
  }
};

for(let numbers of range){
  arr.push(numbers);
  alert(arr);

  if (numbers % 2 == 0){
    sum += numbers;
  }
}

alert(sum);
