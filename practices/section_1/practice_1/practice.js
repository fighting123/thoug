function collect_same_elements(collection_a, collection_b) {
  
  	var arr = [];
	for(var i=0,len=collection_a.length;i<len;i++){
		for(var j=0,lens=collection_b.length;j<lens;j++){
			if(collection_a[i] == collection_b[j]){
				arr.push(collection_a[i]);
			}
		}
	};
	return arr;

}

module.exports = collect_same_elements;