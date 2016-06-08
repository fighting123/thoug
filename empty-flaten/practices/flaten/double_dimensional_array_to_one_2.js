'use strict';

function double_to_one(collection) {
	var arr = [];
	var arrSort = [];
	for(var i=0;i<collection.length;i++){
	  if(!Array.isArray(collection[i])){
	  	arr.push(collection[i]);
	  }else{
	  	for(var j=0;j<collection[i].length;j++){
	  	  arr.push(collection[i][j]);
	  	}
	  }
    };
  for(var i=0;i<arr.length;i++){
  	if(arr.indexOf(arr[i]) == i){
  	  arrSort.push(arr[i]);
  	}
  }
  return arrSort;

}

module.exports = double_to_one;
