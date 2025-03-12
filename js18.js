function info(hoby,gender)
    {
        console.log("I am "+this.name+" and I am "+this.age+" years old.Hobby is "+hoby+" and gender is "+gender);
    }

const person={
    name:"John",
    age:30,
    about: info 

}
const person1={
    name:"John cina",
    age:301,
    about: info

}
const person2={
    name:"Johnanna",
    age:3000,
    about: function()
    {   console.log(this)
        console.log("I am "+this.name+" and I am "+this.age+" years old");
    }
}
//call ,apply,bind
//call
info.call(person1,"drinking","male")
//apply
info.apply(person2,["drinking","male"])
//bind
const boundInfo=info.bind(person2,"drinking","male")
boundInfo();
person2.about()

