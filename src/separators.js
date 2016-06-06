'use strict';

function thousands_separators(num) {
	var number = String(num);
	var numArr = number.split('.');
	var intNumArr = [];
	var finalyNum = '';
	for(var i=0;i<numArr[0].length;i++){
		intNumArr.push(numArr[0][i]);
	};
	var conIntNumArr = intNumArr.reverse();
	if(intNumArr.length/3&&intNumArr.length>3){
		conIntNumArr.splice(3,0,',');
	};
	console.log(intNumArr.length);
	for(var i=5;i<intNumArr.length+1;i++){
		if( i%4 == 0 ){
			conIntNumArr.splice(i-1,0,',');
		}
	};
	finalyNum = conIntNumArr.reverse().join('');
	if(numArr[1]==undefined){
		return finalyNum;
	}else{
		return finalyNum + '.' + numArr[1];
	}
}
module.exports = thousands_separators;
