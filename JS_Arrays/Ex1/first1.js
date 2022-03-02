"use strict"

const a = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i <= a.length - 1; i++) {
    console.log(a[i]);
}

let index = 0;
while (index <= a.length - 1) {
    index++
}
console.log(index);

index = 0;
do {
    index++
    console.log(index);
}while (index <= a.length - 1);



for (let num of a) {
    console.log( num ); 
}

a.forEach(console.log);


let newA = a.map(item => item + 1);
console.log(newA);