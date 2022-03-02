var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var x in obj) {
        if (isNumeric(obj[x])) {
        obj[x] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log( menu.width, menu.height, menu.title );