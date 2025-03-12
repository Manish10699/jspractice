//every
const emp=[{
    name: "John",
    age: 30,
    city: "New York",
    salary:3000},
    {
     name:"manish",
     age:23,
     city:"ankola",
     salary:2000
    },
    {
        name:"kartik",
        age:25,
        city:"bangalore",
        salary:4000
        },
        {
            name:"sachin",
            age:28,
            city:"pune",
            salary:5000
}]

function salary(sal)
{
    return sal>4000;
}

const details=emp.every(salary)
console.log(details)