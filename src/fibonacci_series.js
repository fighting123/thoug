'use strict';

function fibonacci_series(n) {
	var arr = [0,1];
	for(var i=0;i<n-1;i++){
		arr.push(arr[i]+arr[i+1]);
	};
	return arr;
}
module.exports = fibonacci_series;