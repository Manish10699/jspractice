function userData(firstName,lastName,gmail,age,adress)
{   let user = Object.create(userData.prototype)
    user.firstName= firstName,
    user.lastName = lastName,
        user.gmail = gmail,  
        user.age = age,
        user.address = adress
    
    user.about=user.about;
    user.is18=user.is18;
    return user;
}
userData.prototype.about=function(){
    return `${this.firstName} is Me and age ${this.age}`
}
userData.prototype.is18=()=>{return this.age>=18;}
 const user1=userData("manish","Naik","manishnk46@gmail.com",25,"karnataka");
console.log(user1)
console.log(user1.about())
console.log(user1.is18())
console.log(user1.address)
console.log(userData.prototype)