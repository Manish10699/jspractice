//splice(start,delete,insert

const arr=["itemm1","itemm2","itemm3","itemm4"];
//insert
arr.splice(2,0,"hello")
console.log(arr)

const remains=arr.splice(1,2);
//delete
console.log(arr)
//deleeted elements
console.log(remains)