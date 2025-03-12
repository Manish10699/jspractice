const person={
    name: "John",
    address:{houseNumber:"1234",
        street:"Main St",
        city:"Anytown",
        state:"CA",
        zip:"12345"
    }
}
console.log(person.name)
console.log(person?.address?.houseNumber)