var product=[{
    name:"Laptop",
    id:1,
    price:5000,
    quantity:10
},
{
    name:"mobile",
    id:2,
    price:3000,
    quantity:20
}]
//product.filter(prc=>{if (prc.price<4000){console.log(prc.id)}})
  //  product.filter((quant=>{if(quant.quantity==10){console.log(quant);}}))
//product.map((com,index)=>{console.log(com,index);}) 
  //sorted
 // product.sort((a,b)=>{return a.price-b.price})
 var res= product.reduce((total,id)=>total+id,0)
 console.log(res);