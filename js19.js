const userdetails={
    about:function(){
        console.log("I am a user");
        return `${this.firstName} and age is ${this.age}`;
    },
    is18:function(){ 
        return this.age>=18;
    }
}

function userData(firstName,lastName,gmail,age,adress)
{  
    let user = {
        firstName : firstName,
        lastName : lastName,
        gmail : gmail,
        age : age,
        address : adress
    }
    
    user.about=userdetails.about;
    user.is18=userdetails.is18;
    return user;
    
}

const user1=userData("manish","Naik","manishnk46@gmail.com",25,"karnataka");
console.log(user1)
console.log(user1.about())
console.log(user1.is18())
console.log(user1.address)
console.log(user1)