const arr=[922,8,63382,34,1122];
const op=arr.sort((a,b)=>a-b)
console.log(op);

//low to high
const products=[{
    "id": 1,
    "name": "product1",
    "price": 10.99
    },{
        "id": 2,
        "name": "product2",
        "price": 5.99
        },
        {
            "id": 3,
            "name": "product3",
            "price": 7.99
            },
            {
                "id": 4,
                "name": "product4",
                "price": 3.99
}]

const lowtohigh=products.slice(0).sort((a,b)=>a.price-b.price)
console.log(lowtohigh);
console.log(products)
