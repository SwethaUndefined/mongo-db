var array = [1,2,3,1,2,4,5,7];

//    function findDuplicateElements(arr){
// 	   return arr.filter((currentValue,currentIndex)=>
// 		   arr.indexOf(currentValue)!=currentIndex
// 	   )
//    } 

//   var res = findDuplicateElements(array);
// console.log(res)
var array = [1,2,3,1,2,4,5,7];
var res = [1,2]
var newArr = [];

for(var i=0;i<array.length;i++){
	for(var j=0;i<res.length;j++){
	if(array[i]!=res[j]){
		newArr.push(array[i])
	}
  }
}

console.log(newArr)