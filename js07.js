// numbers=[4,2,3,5];
// numbers.forEach(function(element,msk,) {
//     console.log(element*2,msk);    
// });

// shoot=["me","nitesh","aj","vikku "];
// shoot.forEach(function(element,msk,) {
//     console.log(element,msk);
// })

const emp=[
    {id:"e1",
        name:"alex",
        salary:50000
    }
    ,
    {id:"e2",
        name:"john",
        salary:60000
        },
    {
        id:"e3",
        name:"aj",
        salary:70000
    }
]
// const empName=function(val)
// {
//     console.log(val.name);
//     console.log(val.salary)
// }

// emp.forEach((data)=>
// {
//     empName(data);
// }) 
emp.forEach(function(val)
{
    console.log(val.name,val.salary);
})
const names =emp.map((val)=>
{
    return val.id+" "+val.name;

})
console.log(names)

