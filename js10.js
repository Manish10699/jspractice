//find
const arr=["van","cat","hippo","hen","snake"];
const data=arr.find((a)=>a.length===5)
console.log(data);

const userdata=[{
    "id":1,
    "name": "John",
    "pasword":"1234",
    "age": 30
    },{ "id":2,
        "name": "Alice",
        "pasword":"2345",
        "age": 25
        },
        {   "id":3,
            "name": "Bob",
            "pasword":"4567",
            "age": 40
            },
            {   "id":4,
                "name": "Charlie",
                "pasword":"5678",
                "age": 35
}]
let username="John";
let password="1234";
const user=userdata.find((data)=>{
    return data.name===username&& data.pasword===password});
console.log(user);
console.log(user.id)
id=user.id;
console.log(id);