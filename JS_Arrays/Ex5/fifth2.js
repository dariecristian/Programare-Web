function squareMe(fn,arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(square(arr[i]));
    }
    return newArr;
}
function square(x) {return x*x;}
console.log(squareMe(square,[1,2,3]));//1,4,9
console.log(squareMe(square,[]));//[]