//new keyword 

function userdetails(username,age){
    this.username=username,
    this.age=age
}

const user1=new userdetails("mnaish",25);

console.log(user1)
userdetails.prototype.about=function(){
    console.log(`username is ${this.username} and age is ${this.age}`)
}
console.log(user1.about())