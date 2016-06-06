function calculate_median(arr) {
  //请勿改动函数名
  var newArr = arr.filter(function(value,item,arr){
  	return (item+1) % 2 == 0;
  });
  var len = newArr.length;
  if(len % 2 == 1){
  	console.log(newArr[(len-1)/2]);
  }else{
  	console.log((newArr[len/2] + newArr[len/2-1])/2);
  }
};
module.exports = calculate_median;
