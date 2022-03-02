let array9 = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100]
console.log(filter()); 
function filter(){
	return array9.filter(function(array9){ return typeof(array9) == "number"});
}