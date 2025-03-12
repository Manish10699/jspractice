const item=["item1","item2",'item3'];
const data=new Set();
data.add(item);
data.add(1);
data.add(32);
data.add(["item1","item2","item3"])
data.add("hello");
if(data.has(1)){
    console.log("1 is in the set");
}

for(set of data){
    console.log(set);
}

const elements=[1,2,3,42,1,3,1,2,4,4,5,42]
const uniqueElements=new Set(elements);
console.log(uniqueElements)
console.log(uniqueElements.size)