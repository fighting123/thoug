'use strict';

function double_to_one(collection) {
  
  var arr = [];
  for(var i=0;i<collection.length;i++){
  	if(!Array.isArray(collection[i])){
  		arr.push(collection[i]);
  	}else{
  		for(var j=0;j<collection[i].length;j++){
  			arr.push(collection[i][j]);
  		}
  	}
  }
  return arr;
}

module.exports = double_to_one;