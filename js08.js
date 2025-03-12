const arr=[1,2,3,4,5,6,7,8]

const iseven=arr.filter(function(val){
    
    return val%2==0;
})
console.log(iseven);

//reduce
const sum=arr.reduce(function(acc,val){
    return acc+val
    },0)
    console.log(sum);

    const userCart=[
        {id:1,name:"apple",price:10},
        {id:2,name:"banana",price:20},
        {id:3,name:"orange",price:30}
    ] 
    const total=userCart.reduce((acc,cur)=>{
        return acc+cur.price;
    },0)
    console.log(total);
    const arr1=[34,"manish",{name:"akash",age:33},true]
    arr1.forEach((val)=>{
        console.log(val.name);
    })
    