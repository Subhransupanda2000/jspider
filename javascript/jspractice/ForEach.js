var product=[{
    name:"Laptop",
    id:1,
    price:50000,
    quantity:10
},
{
    name:"mobile",
    id:2,
    price:30000,
    quantity:20
}]
product.forEach(function(prod,index)
{
    console.log("product name is "+prod.name+" id is "+prod.id)
})
