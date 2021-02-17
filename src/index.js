
exports.min = function min (array) {
	if(Array.isArray(array) && array.length){
    var min =array[0];
    for (let index = 0; index <array.length; index++) {
       if(array[index] < min){
            min =array[index];
       }      
    }
    return min;}
	else{
		return 0;
	}
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length){
    var max =array[0];
    for (let index = 0; index <array.length; index++) {
       if(array[index] > max){
            max =array[index];
       }      
    }
    return max;}
	else{
		return 0;
	}
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length){
    var sum = 0;
    for (let index = 0; index <array.length; index++) {
       sum +=array[index]; 
    }
    return sum /array.length;}
	else{
		return 0;
	}
}
