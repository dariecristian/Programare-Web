let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let suma = 0;
for (let x in salaries) {
    suma += salaries[x];
}

console.log(suma);
