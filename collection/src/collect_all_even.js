'use strict';

function collect_all_even(collection) {
  
	var newArr = collection.filter(function(value,index,arr){

		return value%2 == 0;

	});
	return newArr;
	
}
module.exports = collect_all_even;