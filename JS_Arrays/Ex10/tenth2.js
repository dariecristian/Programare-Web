let actualArr = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];

let filteredArr = actualArr.filter(function(item, index) {
    if (actualArr.indexOf(item) == index)
        return item;
});
filteredArr.sort(function(a, b) 
{
    return a - b; 
});
console.log( filteredArr);