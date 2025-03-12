//objects
// let key="gender"
// const students={
//     name:"John",
//     age:20,
//     grade:90
// }
// students[key]="male"
// console.log(students.name)
// for(student in students){
//     console.log(student,students[student])
// }
// console.log(Object.keys(students))
// let{var1,var2}=students;
// // console.log(var1)
// const users=[
//     {
//         userId:1,
//         name:"John",
//         age:20
//         },
//         {
//             userId:2,
//             name:"Jane",
//             age:25
//         },
//         {
//             userId:3,
//             name:"Bob",
//             age:30
//         }
// ];
// const [{name},,{age}]=users
// console.log(name,age)
 
function getTrget(arr,target)
{
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]===target)
           {
            return i;
           }
    }
    return -1;

}
let arr=[1,2,3,4,5,6,7,8,9,]
let target=5
console.log(getTrget(arr,target))
